import { Facebook, Twitter, Instagram, CreditCard, Truck, Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      {/* Features */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary-500/20 rounded-lg">
                <Truck className="text-primary-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Envío Gratis</h3>
                <p className="text-gray-400 text-sm">En compras mayores a $50</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary-500/20 rounded-lg">
                <Shield className="text-primary-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Garantía</h3>
                <p className="text-gray-400 text-sm">30 días de devolución</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary-500/20 rounded-lg">
                <CreditCard className="text-primary-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Pago Seguro</h3>
                <p className="text-gray-400 text-sm">Protegido por SSL</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold mb-4">TechStore</h3>
            <p className="text-gray-400 mb-4">
              Tu tienda de tecnología de confianza. Productos de calidad con garantía.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categorías</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Laptops</a></li>
              <li><a href="#" className="hover:text-white">Smartphones</a></li>
              <li><a href="#" className="hover:text-white">Tablets</a></li>
              <li><a href="#" className="hover:text-white">Accesorios</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Soporte</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Centro de ayuda</a></li>
              <li><a href="#" className="hover:text-white">Contacto</a></li>
              <li><a href="#" className="hover:text-white">Política de devoluciones</a></li>
              <li><a href="#" className="hover:text-white">Términos de servicio</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir ofertas exclusivas.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="tu@email.com"
                className="input-field bg-gray-800 border-gray-700 text-white rounded-r-none"
              />
              <button className="btn-primary rounded-l-none px-4">
                Suscribir
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 text-center text-gray-400">
          <p>© 2024 TechStore Demo. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">Este es un proyecto de demostración.</p>
        </div>
      </div>
    </footer>
  )
}