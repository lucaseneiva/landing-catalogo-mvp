// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

// Importe os componentes de Navbar e Footer
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Catálogo de Produtos MVP',
  description: 'Um catálogo de produtos simples construído com Next.js e DatoCMS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50 flex flex-col min-h-screen`}>
        {/* 1. Adicionamos a Navbar aqui, antes do conteúdo principal */}
        <Navbar />

        {/* 2. O conteúdo da página (`children`) agora fica dentro de uma tag <main> */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 3. Adicionamos o Footer aqui, depois do conteúdo principal */}
        <Footer />
      </body>
    </html>
  );
}