// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Produtos de Qualidade.
            <strong className="block font-extrabold text-blue-700">
              Entrega Garantida.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Conheça nosso catálogo completo e encontre a solução ideal para
            você. Simplicidade e eficiência ao seu alcance.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring sm:w-auto"
              href="#catalogo" // Este linklevará para a seção do catálogo
            > 
              Ver Catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}