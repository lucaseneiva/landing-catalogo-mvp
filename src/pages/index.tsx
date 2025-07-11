// src/pages/index.tsx
import { createClient } from 'contentful';
import type { GetStaticProps, NextPage } from 'next';

import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

// Tipo para as propriedades da nossa página
interface HomePageProps {
  products: any[]; // Usando 'any' por enquanto
}

// Componente da página que recebe 'products'
const HomePage: NextPage<HomePageProps> = ({ products }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Hero />
        <About />
        <Features products={products} />
      </main>
      <Footer />
    </div>
  );
};

// Exportação padrão do componente da página
export default HomePage;

// Função para buscar dados estáticos
export const getStaticProps: GetStaticProps = async () => {
  // Garantir que as variáveis de ambiente não estão vazias
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    throw new Error("As variáveis de ambiente do Contentful não estão configuradas.");
  }

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: 'product' });

  // Nosso console.log para depuração
  console.log('--- EXECUTANDO getStaticProps ---');
  console.log(`Encontrados ${res.items.length} produtos.`);

  return {
    props: {
      products: res.items,
    },
    revalidate: 60,
  };
};