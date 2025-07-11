// src/components/Features.tsx
import ProductCard from './ProductCard';

// O componente agora espera receber uma lista de produtos
export default function Features({ products = [] }: any) {
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
          {products.map((p: any) => (
            <ProductCard key={p.sys.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}