// src/app/page.tsx

import { createClient } from 'contentful';
// Importação de unstable_noStore para desabilitar o cache estático
import { unstable_noStore as noStore } from 'next/cache';

import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

async function getProducts() {
  // Chamamos noStore() no início da função para indicar que esta busca não deve ser cacheada estaticamente.
  // Isso fará com que os dados sejam buscados a cada requisição, similar a `getServerSideProps`.
  noStore();

  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    throw new Error("As variáveis de ambiente do Contentful não estão configuradas.");
  }

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // A chamada agora está limpa, sem o parâmetro 'next'
  const res = await client.getEntries({ content_type: 'product' });
  
  console.log('--- EXECUTANDO Server Component (Dinâmico): app/page.tsx ---');
  console.log(`Encontrados ${res.items.length} produtos.`);

  return res.items;
}

export default async function HomePage() {
  const products = await getProducts();

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
}