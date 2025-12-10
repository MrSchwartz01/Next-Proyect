import React, { useState, useEffect } from 'react';
import styles from './ProductGrid.module.css';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}

export default function ProductGrid() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Aquí iría la llamada a tu API
        const fetchProducts = async () => {
            try {
                // const response = await fetch('/api/products');
                // const data = await response.json();
                // setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Cargando...</div>;

    return (
        <div className={styles.grid}>
            {products.map((product) => (
                <div key={product.id} className={styles.card}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <span className={styles.price}>${product.price}</span>
                </div>
            ))}
        </div>
    );
}