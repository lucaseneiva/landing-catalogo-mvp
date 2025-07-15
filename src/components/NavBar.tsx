// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo ou Nome do Site */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-blue-600 font-bold" href="/">
              MeuCatálogo
            </Link>
          </div>

          {/* Navegação */}
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/produtos"
                  >
                    Catálogo
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Ações (ex: botão de login, etc - podemos adicionar no futuro) */}
            <div className="flex items-center gap-4">
              {/* Espaço para futuros botões */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}