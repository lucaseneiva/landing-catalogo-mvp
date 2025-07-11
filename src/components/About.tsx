// src/components/About.tsx
export default function About() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
            <img
              alt="Visão da empresa"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">Nossa Visão</h2>
            <p className="mt-4 text-gray-600">
              Acreditamos que a tecnologia deve ser uma aliada, simplificando
              processos e impulsionando o crescimento. Nossa missão é oferecer
              soluções que sejam não apenas poderosas, mas também intuitivas
              e fáceis de gerenciar pelo próprio cliente.
            </p>
            <p className="mt-4 text-gray-600">
              Focamos em construir parcerias duradouras, entendendo as
              necessidades de cada negócio para entregar um produto que gere
              valor real e resultados mensuráveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}