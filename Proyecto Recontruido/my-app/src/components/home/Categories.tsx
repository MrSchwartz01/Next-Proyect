import React from 'react';

interface Category {
    id: number;
    name: string;
    icon: string;
    description: string;
}

const Categories: React.FC = () => {
    const categories: Category[] = [
        { id: 1, name: 'Electrónica', icon: '📱', description: 'Productos electrónicos' },
        { id: 2, name: 'Ropa', icon: '👕', description: 'Prendas de vestir' },
        { id: 3, name: 'Hogar', icon: '🏠', description: 'Artículos para el hogar' },
        { id: 4, name: 'Deportes', icon: '⚽', description: 'Equipamiento deportivo' },
    ];

    return (
        <section className="categories">
            <h2>Categorías</h2>
            <div className="categories-grid">
                {categories.map((category) => (
                    <div key={category.id} className="category-card">
                        <div className="category-icon">{category.icon}</div>
                        <h3>{category.name}</h3>
                        <p>{category.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;