import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList() {
    const products = [
        {
            id: 1,
            title: 'Burger',
            price: '50.99',
            image: 'https://tse4.mm.bing.net/th/id/OIP.-gQuthUaZU7mIi8vTD517AHaHa?rs=1&pid=ImgDetMain&o=7&rm=320',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    onAddToCart={() => alert(`${product.title} added to cart!`)}
                />
            ))}
        </div>
    );
}

