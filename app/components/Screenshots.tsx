'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const screenshots = [
  {
    id: 'home',
    title: 'Interface Principal',
    description: 'Design moderno com acesso rápido a todas as ferramentas',
    mockup: (
      <div className="rounded-3xl p-6 h-full" style={{ backgroundColor: '#111827' }}>
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-4 mb-4">
          <div className="text-center text-white font-bold text-lg">ToneForge</div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { name: 'Afinador', color: '#FF9500' },
            { name: 'Efeitos', color: '#007AFF' },
            { name: 'Looper', color: '#AF52DE' },
            { name: 'Metrônomo', color: '#34C759' },
            { name: 'Gravador', color: '#FF3B30' },
            { name: 'Aprender', color: '#5AC8FA' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl p-3 text-center text-white text-xs font-medium" style={{ backgroundColor: '#1F2937', borderLeft: `3px solid ${item.color}` }}>
              {item.name}
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl p-3" style={{ backgroundColor: '#1F2937' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-xs">Pipeline Ativo</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div className="h-1 bg-gray-700 rounded-full">
            <div className="h-full w-3/4 rounded-full" style={{ backgroundColor: '#3B82F6' }}></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'effects',
    title: 'Pedaleira de Efeitos',
    description: 'Controles profissionais para todos os efeitos',
    mockup: (
      <div className="rounded-3xl p-6 h-full" style={{ backgroundColor: '#111827' }}>
        <div className="text-white font-bold mb-4 text-center" style={{ color: '#007AFF' }}>Efeitos</div>
        <div className="space-y-3">
          {[
            { name: 'Gain', color: '#10B981', value: 65 },
            { name: 'Distortion', color: '#DC2626', value: 45 },
            { name: 'Delay', color: '#059669', value: 30 }
          ].map((effect, i) => (
            <div key={i} className="rounded-lg p-3" style={{ backgroundColor: '#1F2937' }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-sm">{effect.name}</span>
                <div className="w-8 h-4 rounded-full p-0.5" style={{ backgroundColor: '#374151' }}>
                  <div className="w-3 h-3 rounded-full translate-x-4" style={{ backgroundColor: effect.color }}></div>
                </div>
              </div>
              <div className="h-1 rounded-full" style={{ backgroundColor: '#374151' }}>
                <div className="h-full rounded-full" style={{ width: `${effect.value}%`, backgroundColor: effect.color }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {['Preset 1', 'Preset 2', 'Preset 3'].map((preset, i) => (
            <div key={i} className="rounded p-2 text-white text-xs text-center" style={{ backgroundColor: '#8B5CF6' }}>
              {preset}
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'looper',
    title: 'Looper Multi-track',
    description: 'Grave e reproduza loops com visualização em tempo real',
    mockup: (
      <div className="rounded-3xl p-6 h-full" style={{ backgroundColor: '#111827' }}>
        <div className="text-white font-bold mb-4 text-center" style={{ color: '#AF52DE' }}>Looper</div>
        <div className="rounded-xl p-3 mb-4" style={{ backgroundColor: '#1F2937' }}>
          <div className="h-12 rounded-lg relative overflow-hidden" style={{ backgroundColor: '#374151' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/40 to-purple-500/20"></div>
            <div className="absolute left-1/3 top-0 w-0.5 h-full animate-pulse" style={{ backgroundColor: '#AF52DE' }}></div>
          </div>
          <div className="text-center text-white text-xs mt-2">Waveform</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {['REC', 'PLAY', 'STOP'].map((button, i) => (
            <div key={i} className={`
              rounded-lg p-3 text-center text-white font-bold text-sm
              ${button === 'REC' ? 'bg-red-600' : button === 'PLAY' ? 'bg-green-600' : 'bg-gray-600'}
            `}>
              {button}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {['Track 1', 'Track 2'].map((track, i) => (
            <div key={i} className="rounded p-2 flex items-center justify-between" style={{ backgroundColor: '#1F2937' }}>
              <span className="text-white text-xs">{track}</span>
              <div className="flex gap-1">
                <div className="w-6 h-4 rounded text-xs text-center text-white" style={{ backgroundColor: '#3B82F6' }}>M</div>
                <div className="w-6 h-4 rounded text-xs text-center text-white" style={{ backgroundColor: '#CA8A04' }}>S</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'tuner',
    title: 'Afinador de Precisão',
    description: 'Detecção de frequência com precisão profissional',
    mockup: (
      <div className="rounded-3xl p-6 h-full" style={{ backgroundColor: '#111827' }}>
        <div className="text-white font-bold mb-4 text-center" style={{ color: '#FF9500' }}>Afinador</div>
        <div className="text-center mb-6">
          <div className="text-6xl font-bold mb-2" style={{ color: '#FF9500' }}>A</div>
          <div className="text-2xl text-white mb-1">440.0 Hz</div>
          <div className="text-green-400 text-sm">+2 cents</div>
        </div>
        <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: '#1F2937' }}>
          <div className="h-8 rounded-lg relative" style={{ backgroundColor: '#374151' }}>
            <div className="absolute left-1/2 top-0 w-1 h-full bg-white"></div>
            <div className="absolute left-1/2 top-1 w-3 h-6 bg-green-400 rounded -translate-x-1/2 translate-x-1"></div>
          </div>
          <div className="flex justify-between text-white text-xs mt-2">
            <span>&#9837;</span>
            <span>Afinado</span>
            <span>&#9839;</span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {['C', 'D', 'E', 'F', 'G', 'A', 'B'].map((note, i) => (
            <div key={i} className="p-2 rounded text-center text-sm font-bold" style={{
              backgroundColor: note === 'A' ? '#FF9500' : '#1F2937',
              color: note === 'A' ? 'white' : '#9CA3AF'
            }}>
              {note}
            </div>
          ))}
        </div>
      </div>
    )
  }
]

export default function Screenshots() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextScreen = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevScreen = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section id="screenshots" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Preview da
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent ml-4">
              Interface
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Design intuitivo com tema escuro, otimizado para performance musical
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-gray-800 rounded-[3rem] p-6 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="bg-gray-900 px-6 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="text-white text-sm">9:41</div>
                    <div className="text-white text-sm">100%</div>
                  </div>

                  {/* App Content */}
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="h-full"
                  >
                    {screenshots[currentIndex].mockup}
                  </motion.div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevScreen}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextScreen}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                {screenshots[currentIndex].title}
              </h3>
              <p className="text-xl text-gray-400 mb-6">
                {screenshots[currentIndex].description}
              </p>
            </motion.div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                'Design intuitivo com tema escuro',
                'Knobs realistas com controle preciso',
                'Visualização de waveform em tempo real',
                'Navegação por grid na tela inicial'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Screenshots Navigation */}
            <div className="flex gap-3 pt-6">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8 mb-8">
          <p className="text-gray-500 text-sm italic">Representação ilustrativa da interface. O design real pode variar.</p>
        </div>

      </div>
    </section>
  )
} 