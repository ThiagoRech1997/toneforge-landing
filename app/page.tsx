import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Effects from './components/Effects'
import Screenshots from './components/Screenshots'
import TechnicalSpecs from './components/TechnicalSpecs'
import Download from './components/Download'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <Navbar />
      <Hero />

      {/* Separador visual sutil */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mx-auto max-w-4xl" />

      <div className="bg-gray-900/30">
        <Features />
      </div>

      {/* Separador visual sutil */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-700/30 to-transparent mx-auto max-w-4xl" />

      <Effects />

      {/* Separador visual sutil */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-700/30 to-transparent mx-auto max-w-4xl" />

      <div className="bg-gray-900/20">
        <Screenshots />
      </div>

      {/* Separador visual sutil */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-700/30 to-transparent mx-auto max-w-4xl" />

      <TechnicalSpecs />

      {/* Separador visual mais destacado antes do download */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mx-auto max-w-6xl" />

      <div className="bg-gray-900/30">
        <Download />
      </div>
      <Footer />
    </main>
  )
} 