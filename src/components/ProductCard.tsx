// src/components/ProductCard.tsx
import Image from 'next/image';

// Definindo a "forma" dos dados do produto para ter autocomplete e segurança
interface ProductCardProps {
	product: {
		fields: {
			title: string;
			slug: string;
			description: string;
			price: number;
			image: {
				fields: {
					file: {
						url: string;
						details: {
							image: {
								width: number;
								height: number;
							};
						};
					};
				};
			};
		};
		sys: {
			id: string;
		};
	};
}

export default function ProductCard({ product }: ProductCardProps) {
	console.log("Renderizando ProductCard no... Onde?");
	const { title, description, price, image } = product.fields;
	const imageUrl = 'https:' + image.fields.file.url;
	const { width, height } = image.fields.file.details.image;

	return (
		<div className="group block overflow-hidden rounded-lg border border-gray-200 shadow-sm">
			<div className="relative h-56 w-full">
				<Image
					src={imageUrl}
					alt={title}
					width={width}
					height={height}
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