import HeroSection from '@/components/home/HeroSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Categories from '@/components/home/Categories'
import Testimonials from '@/components/home/Testimonials'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <CallToAction />
    </>
  )
}

function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ¿Listo para comenzar?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Únete a miles de clientes satisfechos. Envío gratis en tu primera compra.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary bg-white text-primary-700 hover:bg-gray-100 px-8">
            Comprar Ahora
          </button>
          <button className="btn-secondary bg-transparent border-white text-white hover:bg-white/10">
            Ver Catálogo
          </button>
        </div>
      </div>
    </section>
  )
}