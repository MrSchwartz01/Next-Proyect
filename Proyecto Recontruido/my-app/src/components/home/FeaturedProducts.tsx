import React from 'react';

'use client';


interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}

export default function FeatureProducts() {
    const featuredProducts: Product[] = [
        {
            id: 1,
            name: 'Producto Destacado 1',
            price: 99.99,
            image: '/images/product-1.jpg',
            description: 'Descripción del producto destacado'
        },
        {
            id: 2,
            name: 'Producto Destacado 2',
            price: 149.99,
            image: '/images/product-2.jpg',
            description: 'Descripción del producto destacado'
        },
        {
            id: 3,
            name: 'Producto Destacado 3',
            price: 199.99,
            image: '/images/product-3.jpg',
            description: 'Descripción del producto destacado'
        }
    ];

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Productos Destacados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}