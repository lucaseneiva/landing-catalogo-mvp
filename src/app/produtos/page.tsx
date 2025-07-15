// src/app/produtos/page.tsx

import Link from 'next/link';
import { performRequest } from '@/lib/datocms';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import type { Product } from '@/app/page'; // Reutilizando a interface!

// A mesma query que já usamos
const ALL_PRODUCTS_QUERY = `
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

interface ProductsPageData {
  allProducts: Product[];
}

async function getProducts(): Promise<ProductsPageData> {
  return performRequest<ProductsPageData>(ALL_PRODUCTS_QUERY);
}

export default async function ProductsPage() {
  const { allProducts } = await getProducts();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-grow">
        {/* Reutilizamos o componente Features, que é perfeito para isso! */}
        <Features products={allProducts} />
      </main>
    </div>
  );
}