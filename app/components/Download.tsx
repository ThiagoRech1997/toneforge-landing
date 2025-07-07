'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Download, 
  Github, 
  ExternalLink, 
  Smartphone, 
  Shield, 
  CheckCircle, 
  Star,
  Users,
  Award,
  Music
} from 'lucide-react'

export default function DownloadSection() {
  const [backgroundElements, setBackgroundElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    delay: number;
  }>>([])

  // Background animation - gerado apenas no cliente para evitar erro de hidratação
  useEffect(() => {
    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }))
    setBackgroundElements(elements)
  }, [])

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-black/60 to-gray-900/80"></div>
      
      {/* Animated background elements - usando cores do ToneForge */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {backgroundElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Download
            <span className="text-gradient-effects ml-4">
              Gratuito
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Baixe o ToneForge agora e transforme seu Android em uma pedaleira profissional
          </p>
        </motion.div>

        {/* Main Download Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-cyan-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-500/30 mb-20 relative overflow-hidden"
        >
          {/* Metallic shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center relative z-10">
            {/* App Info */}
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/25 metallic-card animate-pulse-glow">
                  <Music className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">ToneForge</h3>
                  <p className="text-gray-300 text-lg">Versão 2.1.0 • 9.2MB</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-yellow-400 font-medium">4.8</span>
                    </div>
                    <div className="w-1 h-4 bg-gray-600"></div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-400 font-medium">50k+</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Por que escolher o ToneForge?</h4>
                {[
                  'Processamento de áudio em tempo real',
                  '9 efeitos profissionais incluídos',
                  'Interface moderna e intuitiva',
                  'Latência ultra-baixa < 3ms',
                  'Suporte MIDI completo',
                  'Sistema de presets avançado'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="px-3 py-2 bg-green-600/20 rounded-full text-green-400 text-sm font-medium border border-green-500/30">
                  <Shield className="w-4 h-4 inline mr-2" />
                  100% Seguro
                </div>
                <div className="px-3 py-2 bg-blue-600/20 rounded-full text-blue-400 text-sm font-medium border border-blue-500/30">
                  <Award className="w-4 h-4 inline mr-2" />
                  Código Aberto
                </div>
                <div className="px-3 py-2 bg-purple-600/20 rounded-full text-purple-400 text-sm font-medium border border-purple-500/30">
                  Sem Anúncios
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-6">
              {/* Primary Download */}
              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <Download className="w-8 h-8" />
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold mb-1">Download APK</div>
                      <div className="text-blue-100">Android 8.1+ • 9.2MB</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">Grátis</div>
                    <div className="text-blue-100 text-sm">Para sempre</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </motion.button>

              {/* GitHub Download */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full border-2 border-gray-600 hover:border-gray-500 rounded-2xl p-6 text-white hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-700 group-hover:bg-gray-600 rounded-xl flex items-center justify-center transition-colors duration-300">
                      <Github className="w-7 h-7" />
                    </div>
                    <div className="text-left">
                      <div className="text-xl font-bold">GitHub Repository</div>
                      <div className="text-gray-400">Código fonte e releases</div>
                    </div>
                  </div>
                  <ExternalLink className="w-6 h-6 text-gray-400" />
                </div>
              </motion.button>

              {/* Google Play (Coming Soon) */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="w-full bg-gray-800/50 rounded-2xl p-6 border border-gray-700"
              >
                <div className="flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center">
                      <Smartphone className="w-7 h-7 text-green-400" />
                    </div>
                    <div className="text-left">
                      <div className="text-xl font-bold text-white">Google Play Store</div>
                      <div className="text-yellow-400">Em breve...</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Installation & System Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Installation Guide */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/40"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Guia de Instalação
            </h3>
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Baixe o APK',
                  description: 'Clique no botão de download acima'
                },
                {
                  step: '2',
                  title: 'Permita Fontes Desconhecidas',
                  description: 'Vá em Configurações > Segurança > Fontes Desconhecidas'
                },
                {
                  step: '3',
                  title: 'Instale o APK',
                  description: 'Abra o arquivo baixado e siga as instruções'
                },
                {
                  step: '4',
                  title: 'Configure o Áudio',
                  description: 'Conecte fones ou alto-falantes e configure a entrada'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">{step.title}</div>
                    <div className="text-gray-400 text-sm">{step.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* System Requirements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/40"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Requisitos do Sistema
            </h3>
            <div className="space-y-6">
              {[
                {
                  category: 'Sistema Operacional',
                  requirement: 'Android 8.1 (API 27) ou superior',
                  icon: <Smartphone className="w-5 h-5" />
                },
                {
                  category: 'Memória RAM',
                  requirement: '2GB mínimo, 4GB recomendado',
                  icon: <Shield className="w-5 h-5" />
                },
                {
                  category: 'Armazenamento',
                  requirement: '50MB de espaço livre',
                  icon: <Download className="w-5 h-5" />
                },
                {
                  category: 'Arquiteturas',
                  requirement: 'ARM64, ARM32, x86, x86_64',
                  icon: <Award className="w-5 h-5" />
                }
              ].map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-gray-900/40 rounded-xl border border-gray-700/30"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {req.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">{req.category}</div>
                    <div className="text-gray-400 text-sm">{req.requirement}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Performance Note */}
            <div className="mt-8 p-4 bg-blue-900/20 rounded-xl border border-blue-500/30">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-blue-300 font-medium text-sm">Performance Otimizada</div>
                  <div className="text-blue-200 text-xs mt-1">
                    Engine C++ nativo para máxima performance e baixa latência
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 