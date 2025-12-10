export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tecnología de <span className="text-primary-600">Vanguardia</span> al Mejor Precio
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Descubre nuestra selección exclusiva de laptops, smartphones y accesorios con envío gratis y garantía extendida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary">
                Comprar Ahora
              </button>
              <button className="btn-secondary">
                Ver Catálogo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-gray-600">Productos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10k+</div>
                <div className="text-gray-600">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-gray-600">Soporte</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="aspect-video bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary-500 rounded"></div>
                    </div>
                    <p className="text-gray-500">Imagen del producto destacado</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-500">Desde</div>
                    <div className="text-2xl font-bold">$799</div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="text-sm text-primary-600">Oferta</div>
                    <div className="text-2xl font-bold text-primary-700">-20%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}