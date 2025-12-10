import React from 'react';

interface CartItemProps {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
    onQuantityChange: (quantity: number) => void;
    onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
    id,
    name,
    price,
    quantity,
    image,
    onQuantityChange,
    onRemove,
}) => {
    const handleIncrement = () => onQuantityChange(quantity + 1);
    const handleDecrement = () => {
        if (quantity > 1) {
            onQuantityChange(quantity - 1);
        }
    };

    return (
        <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
            {image && (
                <img
                    src={image}
                    alt={name}
                    className="w-20 h-20 object-cover rounded"
                />
            )}
            <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-600">${price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={handleDecrement}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                    -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                    onClick={handleIncrement}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                    +
                </button>
            </div>
            <div className="font-semibold">${(price * quantity).toFixed(2)}</div>
            <button
                onClick={onRemove}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
                Eliminar
            </button>
        </div>
    );
};

export default CartItem;