import { Star, ShoppingBag } from 'lucide-react'
import { Product } from '@/lib/data'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-200 
                    hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 
                       flex items-center justify-center group-hover:scale-105 transition-transform">
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 
                           flex items-center justify-center">
              <ShoppingBag size={32} className="text-gray-400" />
            </div>
            <span className="text-gray-500 text-sm">Imagen de {product.name}</span>
          </div>
        </div>
        
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-3 left-3">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              -{product.discount}%
            </span>
          </div>
        )}
        
        {/* Quick Add Button */}
        <button 
          type="button" 
          aria-label="Add to cart" 
          className="absolute bottom-3 right-3 bg-white p-2 rounded-full 
                          shadow-lg opacity-0 group-hover:opacity-100 transition-opacity 
                          hover:bg-primary-50 hover:text-primary-600">
          <ShoppingBag size={20} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-xs font-medium text-gray-500 bg-gray-100 
                           px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
          <div className="flex items-center">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span className="text-sm font-medium ml-1">{product.rating}</span>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <button className="btn-primary py-2 px-4 text-sm">
            Agregar
          </button>
        </div>

        {/* Stock */}
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Disponible:</span>
            <span className={`font-medium ${product.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
              {product.stock > 10 ? 'En stock' : `Quedan ${product.stock}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}