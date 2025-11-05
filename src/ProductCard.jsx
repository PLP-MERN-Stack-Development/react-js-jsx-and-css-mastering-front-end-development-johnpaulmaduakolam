import React from 'react';
import Button from './Button';

export default function ProductCard({ title, price, image, onAddToCart}) {
    return (
        <div className="max-w-sm border overflow-hidden border-gray-200 rounded-lg p-4 shadow hover:shadow-md hover:scale-105 transition-all duration-200">
            <img
                src={image}
                alt={title}
                className="w-full h-48 hover:scale-105 hover:shadow-md object-cover rounded-md mb-4 transition-all duration-300"
            />
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-green-700 font-bold mb-4">${price}</p>
            <Button
                label="Add to Cart"
                variant="primary"
                className="w-full"
                // onClick={onAddToCart}
            />
        </div>
    );
}