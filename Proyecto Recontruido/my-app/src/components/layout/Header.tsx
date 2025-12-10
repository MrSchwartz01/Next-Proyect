import { ShoppingCart, Search, User, Menu } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const categories = ['Laptops', 'Smartphones', 'Tablets', 'Accesorios', 'Audio']
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg"></div>
              <span className="text-2xl font-bold text-gray-900">TechStore</span>
            </Link>
  
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {categories.map((cat) => (
                <Link 
                  key={cat}
                  href={`/products?category=${cat.toLowerCase()}`}
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
                <button type="button" title="Search" className="p-2 hover:bg-gray-100 rounded-full">
                <Search size={20} />
                </button>
              <button type="button" title="Shopping Cart" className="p-2 hover:bg-gray-100 rounded-full relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
                <button type="button" title="User" className="p-2 hover:bg-gray-100 rounded-full">
                <User size={20} />
                </button>
              <button type="button" title="Menu" className="md:hidden p-2">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-gray-50 px-4 py-2 border-t">
        <div className="flex space-x-4 overflow-x-auto">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/products?category=${cat.toLowerCase()}`}
              className="whitespace-nowrap px-3 py-1 bg-white rounded-full text-sm border"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}