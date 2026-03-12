"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Github,
  Download,
  Code2,
  Music,
  Heart,
  ArrowUp,
  Smartphone,
  Link2,
  Wrench,
  Package,
  Layers,
  Palette,
  Cpu,
} from 'lucide-react'

const sectionLinks = [
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Efeitos', href: '#effects' },
  { label: 'Screenshots', href: '#screenshots' },
  { label: 'Especificações', href: '#specs' },
  { label: 'Download', href: '#download' },
]

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('')
  const [showTopButton, setShowTopButton] = useState(false)

  const basePath = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS ? '/toneforge-landing' : ''

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())

    const onScroll = () => setShowTopButton(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden">
                <Image
                  src={`${basePath}/toneforge-icon.png`}
                  alt="ToneForge Icon"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">ToneForge</h3>
                <p className="text-gray-400">Pedaleira Digital Profissional</p>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Transforme seu dispositivo Android em uma estação de criação musical completa.
              Processamento de áudio em tempo real, efeitos profissionais e tecnologia de baixa latência.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">Código Aberto</span>
              </div>
              <div className="w-1 h-4 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-gray-300 text-sm">100% Grátis</span>
              </div>
            </div>

            {/* Social/Links */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/ThiagoRech1997/ToneForge"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-colors duration-300"
              >
                <Github className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://github.com/ThiagoRech1997/ToneForge/releases"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center transition-colors duration-300"
              >
                <Download className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links - now functional */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Navegação</h4>
            <div className="space-y-3">
              {sectionLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Developer Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Desenvolvedor</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">Thiago Fernando Rech</div>
                  <div className="text-gray-400 text-sm">Android Developer</div>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                Desenvolvedor Android apaixonado por música e tecnologia,
                criando ferramentas que capacitam músicos a expressar sua criatividade.
              </p>

              <div className="flex items-center gap-3">
                <Github className="w-4 h-4 text-gray-400" />
                <a
                  href="https://github.com/ThiagoRech1997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  @ThiagoRech1997
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technology Stack - emojis replaced with Lucide icons, no whileHover */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-gray-700 pt-12 mb-12"
        >
          <div className="text-center mb-8">
            <h4 className="text-lg font-bold text-white mb-4">Tecnologias Utilizadas</h4>
            <p className="text-gray-400 text-sm">
              Construído com as melhores tecnologias para performance e qualidade
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { name: 'Android', icon: <Smartphone className="w-5 h-5 text-white" />, color: 'from-green-500 to-green-600' },
              { name: 'C++', icon: <Cpu className="w-5 h-5 text-white" />, color: 'from-blue-500 to-blue-600' },
              { name: 'JNI', icon: <Link2 className="w-5 h-5 text-white" />, color: 'from-purple-500 to-purple-600' },
              { name: 'CMake', icon: <Wrench className="w-5 h-5 text-white" />, color: 'from-pink-500 to-pink-600' },
              { name: 'NDK', icon: <Wrench className="w-5 h-5 text-white" />, color: 'from-yellow-500 to-yellow-600' },
              { name: 'MVP', icon: <Layers className="w-5 h-5 text-white" />, color: 'from-indigo-500 to-indigo-600' },
              { name: 'Material', icon: <Palette className="w-5 h-5 text-white" />, color: 'from-cyan-500 to-cyan-600' },
              { name: 'Gradle', icon: <Package className="w-5 h-5 text-white" />, color: 'from-gray-500 to-gray-600' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-2 mx-auto`}>
                  {tech.icon}
                </div>
                <span className="text-gray-400 text-sm">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <span>&copy; {currentYear} ToneForge. Todos os direitos reservados.</span>
              <div className="hidden md:flex items-center gap-4">
                <a href="https://github.com/ThiagoRech1997/ToneForge/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Licença</a>
                <a href="https://github.com/ThiagoRech1997/ToneForge" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Código Fonte</a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Music className="w-4 h-4 text-cyan-400" />
              <span className="text-gray-400 text-sm">
                Versão 1.0
              </span>
            </div>
          </div>

          {/* Mobile links */}
          <div className="md:hidden flex flex-wrap justify-center gap-4 mt-6 text-gray-400 text-sm">
            <a href="https://github.com/ThiagoRech1997/ToneForge/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Licença</a>
            <a href="https://github.com/ThiagoRech1997/ToneForge" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Código Fonte</a>
          </div>

          {/* Made with love */}
          <div className="text-center mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              Feito com <Heart className="w-4 h-4 text-red-400" /> para a comunidade musical
            </p>
          </div>
        </motion.div>

        {/* Back to Top Button - shows only after scroll > 500px */}
        {showTopButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1, y: -2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Voltar ao topo"
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </div>
    </footer>
  )
}
