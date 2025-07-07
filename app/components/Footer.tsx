"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Github, 
  ExternalLink, 
  Star, 
  Download, 
  Code2, 
  Music,
  Heart,
  Users,
} from 'lucide-react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('')
  
  // Obter basePath do processo de build ou usar string vazia
  const basePath = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS ? '/toneforge-landing' : ''

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

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
                <img 
                  src={`${basePath}/toneforge-icon.png`} 
                  alt="ToneForge Icon" 
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
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300 text-sm">4.8/5</span>
              </div>
              <div className="w-1 h-4 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">50k+ Downloads</span>
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

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-6">App Features</h4>
            <div className="space-y-3">
              {[
                'Efeitos Profissionais',
                'Looper Multi-track',
                'Afinador Preciso',
                'Sistema de Presets',
                'Suporte MIDI',
                'Gravador Digital'
              ].map((link, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-400 hover:text-gray-300 transition-colors duration-300 text-sm">
                    {link}
                  </span>
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

        {/* Technology Stack */}
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
              { name: 'Android', icon: '🤖', color: 'from-green-500 to-green-600' },
              { name: 'C++', icon: '⚡', color: 'from-blue-500 to-blue-600' },
              { name: 'JNI', icon: '🔗', color: 'from-purple-500 to-purple-600' },
              { name: 'OpenGL', icon: '🎨', color: 'from-pink-500 to-pink-600' },
              { name: 'NDK', icon: '🛠️', color: 'from-yellow-500 to-yellow-600' },
              { name: 'MVP', icon: '🏗️', color: 'from-indigo-500 to-indigo-600' },
              { name: 'Material', icon: '🎭', color: 'from-cyan-500 to-cyan-600' },
              { name: 'Gradle', icon: '📦', color: 'from-gray-500 to-gray-600' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} group-hover:shadow-lg group-hover:shadow-current/25 rounded-xl flex items-center justify-center mb-2 mx-auto transition-all duration-300`}>
                  <span className="text-xl">{tech.icon}</span>
                </div>
                <span className="text-gray-400 group-hover:text-white text-sm transition-colors duration-300">
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
              <span>© {currentYear} ToneForge. Todos os direitos reservados.</span>
              <div className="hidden md:flex items-center gap-4">
                <a href="#" className="hover:text-white transition-colors duration-300">Política de Privacidade</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Termos de Uso</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Licença MIT</a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Music className="w-4 h-4 text-cyan-400" />
              <span className="text-gray-400 text-sm">
                Versão 2.1.0 • Dezembro 2024
              </span>
            </div>
          </div>
          
          {/* Mobile links */}
          <div className="md:hidden flex flex-wrap justify-center gap-4 mt-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-300">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Licença MIT</a>
          </div>

          {/* Made with love */}
          <div className="text-center mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              Feito com <Heart className="w-4 h-4 text-red-400" /> para a comunidade musical
            </p>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.1, y: -2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        >
          <ExternalLink className="w-5 h-5 rotate-[-90deg]" />
        </motion.button>
      </div>
    </footer>
  )
} 