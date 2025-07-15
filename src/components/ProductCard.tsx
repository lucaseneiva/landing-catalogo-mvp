// src/components/ProductCard.tsx
import Image from 'next/image';
import type { Product } from '@/app/page'; // Importando a interface

// A interface das props agora usa a nossa interface Product
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Desestruturação direta. Muito mais simples!
  const { title, description, price, image } = product;
  
  // O alt da imagem pode ser nulo, então fornecemos um fallback.
  const imageAlt = image?.alt || `Imagem do produto ${title}`;

  // Se não houver imagem, podemos optar por não renderizar o card
  if (!image) {
    return null;
  }

  return (
    <div className="group block overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <div className="relative h-56 w-full">
        <Image
          src={image.url}
          alt={imageAlt}
          width={image.width}
          height={image.height}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>

        <p className="mt-2 text-sm text-gray-500">{description}</p>

        {price && (
          <p className="mt-4 text-lg font-semibold text-gray-800">
            R$ {price.toFixed(2).replace('.', ',')}
          </p>
        )}
      </div>
    </div>
  );
}