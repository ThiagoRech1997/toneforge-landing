"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Download, Zap, Music, Cpu } from 'lucide-react'

// Hook para posições aleatórias dos elementos de background
function useRandomPositions(count: number) {
  const [positions, setPositions] = useState<Array<{
    x: number;
    y: number;
    left: number;
    top: number;
    duration: number;
  }>>([])

  useEffect(() => {
    const newPositions = Array.from({ length: count }, () => ({
      x: Math.random() * 50 + 10, // Limita movimento x entre 10-60vw
      y: Math.random() * 50 + 10, // Limita movimento y entre 10-60vh
      left: Math.random() * 80 + 10, // Posição inicial entre 10-90%
      top: Math.random() * 80 + 10, // Posição inicial entre 10-90%
      duration: 15 + Math.random() * 20
    }))
    setPositions(newPositions)
  }, [count])

  return positions
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const backgroundElements = useRandomPositions(6) // Reduzido para 6
  
  // Obter basePath do processo de build ou usar string vazia
  const basePath = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS ? '/toneforge-landing' : ''

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background with ToneForge colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 via-gray-900/10 to-purple-900/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_60%)]"></div>
      </div>

      {/* Animated background elements - CONTAINERIZADO para não interferir */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="hero-animation-container">
          {mounted && backgroundElements.map((element, i) => (
            <motion.div
              key={i}
              className="hero-background-element w-1 h-1 bg-blue-400/30 rounded-full"
              animate={{
                x: [0, element.x],
                y: [0, element.y],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* App Icon - inspirado no design real */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12 flex justify-center"
        >
          <div className="relative">
            <div className="w-32 h-32 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/25 overflow-hidden">
              <Image
                src={`${basePath}/toneforge-icon.png`}
                alt="ToneForge Icon"
                width={128}
                height={128}
                className="w-full h-full object-cover rounded-3xl"
                priority
              />
            </div>
            {/* LED indicator - inspirado nos pedais reais */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
          </div>
        </motion.div>

        {/* Title com gradiente do ToneForge */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
        >
          <span className="text-gradient-effects">
            ToneForge
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-2xl md:text-3xl text-gray-200 mb-6 max-w-4xl mx-auto font-medium"
        >
          Pedaleira Digital Profissional para Android
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed"
        >
          Processamento de áudio em tempo real com engine C++ nativo. 9 efeitos, looper multi-track, afinador, gravador e mais — tudo gratuito e de código aberto.
        </motion.p>

        {/* Features badges - usando cores específicas do app */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="px-4 py-2 bg-gradient-to-r from-blue-600/80 to-blue-500/80 rounded-full text-white text-sm font-medium backdrop-blur-sm border border-blue-400/30 hover:bg-blue-500/90 transition-all duration-300 hover-lift">
            <Zap className="w-4 h-4 inline mr-2" />
            Baixa Latência &lt; 3ms
          </div>
          <div className="px-4 py-2 bg-gradient-to-r from-green-600/80 to-green-500/80 rounded-full text-white text-sm font-medium backdrop-blur-sm border border-green-400/30 hover:bg-green-500/90 transition-all duration-300 hover-lift">
            <Music className="w-4 h-4 inline mr-2" />
            9 Efeitos Profissionais
          </div>
          <div className="px-4 py-2 bg-gradient-to-r from-purple-600/80 to-purple-500/80 rounded-full text-white text-sm font-medium backdrop-blur-sm border border-purple-400/30 hover:bg-purple-500/90 transition-all duration-300 hover-lift">
            100% Gratuito
          </div>
        </motion.div>

        {/* CTA Buttons - usando cores do app */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          <motion.a
            href="https://github.com/ThiagoRech1997/ToneForge/releases"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group relative min-w-[220px] px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 overflow-hidden inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center justify-center gap-3">
              <Download className="w-5 h-5" />
              Baixar Agora
            </div>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="min-w-[220px] px-10 py-4 border-2 border-green-500/60 hover:border-green-400 rounded-full text-white hover:bg-green-500/10 font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
          >
            Ver Funcionalidades
          </motion.button>
        </motion.div>

        {/* Stats - inspirado no Material Design do app */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="glass-strong rounded-2xl p-6 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white">9</div>
            </div>
            <div className="text-gray-300 text-sm">Efeitos de Áudio</div>
          </div>

          <div className="glass-strong rounded-2xl p-6 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white">&lt; 3ms</div>
            </div>
            <div className="text-gray-300 text-sm">Latência</div>
          </div>

          <div className="glass-strong rounded-2xl p-6 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white">C++</div>
            </div>
            <div className="text-gray-300 text-sm">Engine Nativo</div>
          </div>
        </motion.div>

      </div>
    </section>
  )
} 