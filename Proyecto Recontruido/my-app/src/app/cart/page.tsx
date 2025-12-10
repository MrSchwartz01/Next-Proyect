import React, { useState } from 'react';

const CartPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<any[]>([]);

    const addItemToCart = (item: any) => {
        setCartItems([...cartItems, item]);
    };

    const removeItemFromCart = (itemId: number) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <div>
            <h1>Carrito de Compras</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeItemFromCart(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
    );
};

export default CartPage;