'use client'

import { useState } from 'react'
import ProductCard from '@/components/store/ProductCard'
import { featuredProducts, categories } from '@/lib/data'
import { FilterIcon, GridIcon, ListIcon } from '@/components/ui/Icons'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [priceRange, setPriceRange] = useState(1000)
  
  const filteredProducts = selectedCategory === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(p => 
        p.category === selectedCategory && 
        p.price <= priceRange
      )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ... resto del código */}
    </div>
  )
}