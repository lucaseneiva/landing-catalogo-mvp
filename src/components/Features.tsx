// src/components/Features.tsx
import ProductCard from './ProductCard';
import type { Product } from '@/app/page'; // Importando nossa interface Product

// Adicionando a tipagem correta para as props
interface FeaturesProps {
  products: Product[];
}

export default function Features({ products = [] }: FeaturesProps) {
  return (
    <section id="catalogo">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Conheça Nossos Produtos
          </h2>
          <p className="mt-4 text-gray-600">
            Uma seleção de itens pensados para atender suas necessidades com a
            máxima qualidade e eficiência.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* A CORREÇÃO ESTÁ AQUI */}
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}