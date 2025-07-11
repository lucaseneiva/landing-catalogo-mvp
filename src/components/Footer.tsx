// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-sm text-gray-500 lg:text-left">
            Copyright © 2025. Todos os direitos reservados.
          </p>

          <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
            Feito com 💙 para o MVP.
          </p>
        </div>
      </div>
    </footer>
  );
}