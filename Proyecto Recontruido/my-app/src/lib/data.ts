export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  category: string
  rating: number
  image: string
  stock: number
  features: string[]
}

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro M2',
    description: 'Laptop profesional con chip M2, 16GB RAM, 512GB SSD',
    price: 1499,
    originalPrice: 1699,
    discount: 12,
    category: 'Laptops',
    rating: 4.8,
    image: '/products/macbook.jpg',
    stock: 15,
    features: ['Chip M2', '16GB RAM', '512GB SSD', 'Pantalla Retina']
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    description: 'Smartphone flagship con cámara profesional y Dynamic Island',
    price: 999,
    originalPrice: 1099,
    discount: 9,
    category: 'Smartphones',
    rating: 4.9,
    image: '/products/iphone.jpg',
    stock: 25,
    features: ['Cámara 48MP', 'Dynamic Island', 'A17 Pro', 'Titanio']
  },
  {
    id: '3',
    name: 'Samsung Galaxy Tab S9',
    description: 'Tablet premium con S Pen incluido y pantalla Dynamic AMOLED',
    price: 849,
    category: 'Tablets',
    rating: 4.7,
    image: '/products/tablet.jpg',
    stock: 18,
    features: ['S Pen incluido', 'AMOLED 120Hz', 'Snapdragon 8 Gen 2']
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5',
    description: 'Audífonos noise cancelling líderes en el mercado',
    price: 349,
    originalPrice: 399,
    discount: 13,
    category: 'Audio',
    rating: 4.8,
    image: '/products/headphones.jpg',
    stock: 30,
    features: ['Noise Cancelling', '30h batería', '8 micrófonos']
  }
]

export const categories = [
  { id: '1', name: 'Laptops', count: 45, color: 'bg-blue-100 text-blue-800' },
  { id: '2', name: 'Smartphones', count: 68, color: 'bg-green-100 text-green-800' },
  { id: '3', name: 'Tablets', count: 32, color: 'bg-purple-100 text-purple-800' },
  { id: '4', name: 'Audio', count: 89, color: 'bg-orange-100 text-orange-800' },
  { id: '5', name: 'Accesorios', count: 156, color: 'bg-pink-100 text-pink-800' }
]

export const testimonials = [
  {
    id: '1',
    name: 'María González',
    role: 'Diseñadora UX',
    content: 'Excelente servicio y productos de calidad. El envío fue rápido y el producto superó mis expectativas.',
    rating: 5,
    avatar: 'MG'
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    role: 'Ingeniero de Software',
    content: 'La mejor tienda de tecnología online. Precios competitivos y atención al cliente excepcional.',
    rating: 5,
    avatar: 'CR'
  },
  {
    id: '3',
    name: 'Ana Martínez',
    role: 'Estudiante Universitaria',
    content: 'Compré mi laptop aquí y el proceso fue muy sencillo. La garantía me da mucha tranquilidad.',
    rating: 4,
    avatar: 'AM'
  }
]