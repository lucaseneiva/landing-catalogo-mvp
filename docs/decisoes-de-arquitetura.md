# Diário de Bordo e Decisões de Arquitetura

## 1. Migração de Pages Router para App Router

**Contexto:** O projeto foi iniciado usando o Pages Router do Next.js.

**Decisão:** Migrar para o App Router.

**Motivação:**
- O App Router é a arquitetura recomendada e padrão para novos projetos Next.js.
- Oferece vantagens como Server Components por padrão, layouts aninhados e um modelo de carregamento de dados mais simplificado (`async/await` em componentes).

**Aprendizados:**
- O arquivo `app/layout.tsx` substitui e unifica as responsabilidades dos antigos `_app.tsx` e `_document.tsx`.
- A busca de dados que antes era feita em `getStaticProps` agora é realizada diretamente em Server Components, tornando o código mais colocalizado e intuitivo.

---

## 2. Migração de CMS: De Contentful para DatoCMS

**Contexto:** A implementação inicial usava o Contentful como Headless CMS.

**Problemas Encontrados com Contentful:**
1.  **Warning de Depreciação:** A biblioteca `contentful.js` utilizava uma API obsoleta do Node.js (`url.parse()`), gerando warnings constantes no console.
2.  **Limitação com ISR:** A biblioteca não era compatível com a opção `next: { revalidate: ... }` do `fetch` do Next.js, impossibilitando a implementação de Regeneração Estática Incremental (ISR) de forma direta. A única alternativa era usar SSR (`unstable_noStore`), que é menos performático para este caso de uso.
3.  **Complexidade da UI:** A interface do Contentful foi considerada complexa demais para um usuário final não-técnico gerenciar um simples catálogo de produtos.

**Decisão:** Migrar para o DatoCMS.

**Motivação:**
- **Simplicidade da UI:** O DatoCMS oferece uma interface mais direta e focada em editores de conteúdo.
- **Melhor Alinhamento com Next.js (Teórico):** A expectativa era de que o SDK oficial tivesse melhor suporte ao App Router.

---

## 3. Implementação da Conexão com DatoCMS

**Contexto:** A integração com a API do DatoCMS.

**Problema Encontrado:**
- A biblioteca oficial do DatoCMS (`@datocms/cda-client`) também apresentou limitações. Ela não aceitava strings de query GraphQL diretamente (exigia `TypedDocumentNode`) e, crucialmente, também **não suportava a passagem da opção `next: { revalidate: ... }`** para implementar ISR.

**Solução Final:**
- Abandonamos o uso de SDKs de terceiros para a busca de dados.
- Foi criada uma função `performRequest` em `lib/datocms.ts` que utiliza a API `fetch` nativa do Next.js.
- A requisição é feita diretamente ao endpoint GraphQL do DatoCMS (`https://graphql.datocms.com/`).
- Esta abordagem nos deu **controle total**, permitindo injetar a opção `next: { revalidate: 60 }` e implementar a arquitetura **ISR** de forma correta e eficiente.

**Conclusão Técnica:** Para integrações com Next.js App Router que visam ISR, a abordagem mais robusta e flexível é usar o `fetch` nativo, em vez de depender da compatibilidade de SDKs de terceiros.

---

## 4. Gerenciamento de Instabilidade de Serviço (Incidente DatoCMS)

**Contexto:** Durante o desenvolvimento, o painel e a API do DatoCMS apresentaram lentidão e instabilidade.

**Problema:** As atualizações de conteúdo via ISR estavam falhando ou demorando excessivamente, pois a API do DatoCMS não respondia a tempo.

**Ação de Contingência:**
1.  O comportamento do ISR foi comprovado: ele depende da saúde do serviço da API externa.
2.  Para garantir uma entrega estável para uma apresentação, uma versão "travada" do site foi gerada através de um **novo deploy manual na Vercel**. Um build forçado captura o estado mais recente dos dados e o torna estático, removendo a dependência da API em tempo de execução.

**Aprendizado:** A arquitetura Jamstack/Headless protege a experiência do usuário final da instabilidade do CMS, mas as operações de atualização de conteúdo (seja por editores ou por ISR) são vulneráveis. É crucial saber como forçar um rebuild como plano de contingência.

