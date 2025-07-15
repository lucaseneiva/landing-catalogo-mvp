// src/app/page.tsx

import Link from 'next/link'; // <--- IMPORTANTE: Importar o Link
import { performRequest } from '@/lib/datocms';

import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

// A query e as interfaces continuam as mesmas
const PAGE_CONTENT_QUERY = `
  query {
    allProducts {
      id
      title
      description
      price
      image {
        url
        width
        height
        alt
      }
    }
  }
`;

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: {
    url: string;
    width: number;
    height: number;
    alt: string | null;
  };
}

interface HomePageData {
  allProducts: Product[];
}

async function getProducts(): Promise<HomePageData> {
  // Não precisamos mais do log aqui, vamos removê-lo
  return performRequest<HomePageData>(PAGE_CONTENT_QUERY);
}

export default async function HomePage() {
  const { allProducts } = await getProducts();

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Hero />
        <About />

        {/* 1. PASSAMOS APENAS OS 3 PRIMEIROS PRODUTOS */}
        <Features products={allProducts.slice(0, 3)} />

        {/* 2. ADICIONAMOS O BOTÃO CONDICIONAL */}
        {allProducts.length > 3 && (
          <div className="text-center pb-16">
            <Link
              href="/produtos"
              className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow transition hover:bg-blue-700 focus:outline-none focus:ring"
            >
              Ver todos os produtos
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}