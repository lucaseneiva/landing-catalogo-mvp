// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Vamos usar a fonte recomendada pelo Next.js
import '@/styles/globals.css'; // Importando o CSS global aqui, como fazíamos no _app.tsx

// Configuração da fonte
const inter = Inter({ subsets: ['latin'] });

// 'metadata' substitui a necessidade de usar o <Head> do next/document para título, descrição, etc.
// Esta é a nova forma de lidar com SEO.
export const metadata: Metadata = {
  title: 'Catálogo de Produtos MVP',
  description: 'Um catálogo de produtos simples construído com Next.js e Contentful.',
};

// Este é o componente do Layout Raiz
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // A tag <html> e <body> agora são definidas aqui, substituindo o _document.tsx
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {/* 'children' representa a página ou layout aninhado que será renderizado aqui dentro. */}
        {/* No nosso caso, será a futura 'page.tsx' */}
        {children}
      </body>
    </html>
  );
}