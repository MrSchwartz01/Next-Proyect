import React from 'react';
import { useRouter } from 'next/router';

const ProductPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Product ID: {id}</h1>
            {/* Aquí puedes agregar más lógica para gestionar el producto */}
        </div>
    );
};

export default ProductPage;