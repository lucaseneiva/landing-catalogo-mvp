// src/app/page.tsx

import { performRequest } from '@/lib/datocms';

import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

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

// Definindo uma interface para a resposta da nossa query
interface HomePageData {
  allProducts: Product[]; // Usaremos uma interface Product que definiremos no ProductCard
}

// Definindo a interface para um único produto (será importada)
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

async function getProducts(): Promise<HomePageData> {
  console.log('--- EXECUTANDO getProducts com DatoCMS (ISR) ---');
  return performRequest<HomePageData>(PAGE_CONTENT_QUERY);
}

export default async function HomePage() {
  const { allProducts } = await getProducts();

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Hero />
        <About />
        <Features products={allProducts} />
      </main>
      <Footer />
    </div>
  );
}