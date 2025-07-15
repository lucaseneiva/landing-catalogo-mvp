// lib/datocms.ts
import { cache } from 'react';

// Esta é a nova 'performRequest', mais poderosa e correta.
export const performRequest = cache(async <T = any>(
  query: string,
  { revalidate = 60 }: { revalidate?: number | false } = {}
): Promise<T> => {
  // Garantimos que o token da API está configurado.
  if (!process.env.NEXT_DATOCMS_API_TOKEN) {
    throw new Error('A variável de ambiente NEXT_DATOCMS_API_TOKEN não está configurada.');
  }

  const response = await fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
    // A opção 'revalidate' do Next.js é usada aqui!
    // Podemos controlar o tempo de cache por requisição.
    next: {
      revalidate,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch API: ${response.statusText}`);
  }

  const result = await response.json();

  if (result.errors) {
    // Lida com erros específicos do GraphQL
    throw new Error(result.errors.map((e: any) => e.message).join('\n'));
  }

  return result.data;
});