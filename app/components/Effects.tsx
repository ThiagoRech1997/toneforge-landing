'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Volume2, RotateCcw, Settings } from 'lucide-react'

const effects = [
  {
    id: 'gain',
    name: 'Gain',
    description: 'Controle de volume e saturação do sinal de entrada',
    category: 'dynamics',
    color: 'from-green-600 to-emerald-700',
    bgColor: 'bg-green-600/10',
    borderColor: 'border-green-500/30',
    parameters: ['Level: 0-100%', 'Saturação suave']
  },
  {
    id: 'distortion',
    name: 'Distortion',
    description: 'Múltiplos tipos de distorção para diferentes estilos',
    category: 'distortion',
    color: 'from-red-600 to-red-700',
    bgColor: 'bg-red-600/10',
    borderColor: 'border-red-500/30',
    parameters: ['Drive: 0-100%', 'Mix: 0-100%', 'Tipos: Overdrive, Fuzz, Metal']
  },
  {
    id: 'delay',
    name: 'Delay',
    description: 'Eco digital com sincronização de tempo precisa',
    category: 'time',
    color: 'from-green-600 to-teal-700',
    bgColor: 'bg-green-600/10',
    borderColor: 'border-green-500/30',
    parameters: ['Time: 1-2000ms', 'Feedback: 0-95%', 'Sync BPM']
  },
  {
    id: 'reverb',
    name: 'Reverb',
    description: 'Reverberação espacial com múltiplos algoritmos',
    category: 'ambient',
    color: 'from-indigo-600 to-purple-700',
    bgColor: 'bg-indigo-600/10',
    borderColor: 'border-indigo-500/30',
    parameters: ['Room Size', 'Damping', 'Tipos: Hall, Plate, Spring']
  },
  {
    id: 'chorus',
    name: 'Chorus',
    description: 'Efeito de modulação para espessura sonora',
    category: 'modulation',
    color: 'from-blue-600 to-blue-700',
    bgColor: 'bg-blue-600/10',
    borderColor: 'border-blue-500/30',
    parameters: ['Depth: 0-100%', 'Rate: 0.1-10Hz', 'Feedback']
  },
  {
    id: 'flanger',
    name: 'Flanger',
    description: 'Modulação intensa para sons psicodélicos',
    category: 'modulation',
    color: 'from-blue-600 to-cyan-700',
    bgColor: 'bg-blue-600/10',
    borderColor: 'border-blue-500/30',
    parameters: ['Depth: 0-100%', 'Rate: 0.1-10Hz', 'Feedback: 0-95%']
  },
  {
    id: 'phaser',
    name: 'Phaser',
    description: 'Efeito de fase para texturas ricas',
    category: 'modulation',
    color: 'from-blue-600 to-purple-700',
    bgColor: 'bg-blue-600/10',
    borderColor: 'border-blue-500/30',
    parameters: ['Depth: 0-100%', 'Rate: 0.1-10Hz', 'Feedback']
  },
  {
    id: 'eq',
    name: 'EQ 3-Band',
    description: 'Equalizador de 3 bandas para modelagem tonal',
    category: 'filter',
    color: 'from-yellow-600 to-amber-700',
    bgColor: 'bg-yellow-600/10',
    borderColor: 'border-yellow-500/30',
    parameters: ['Low: ±15dB', 'Mid: ±15dB', 'High: ±15dB']
  },
  {
    id: 'compressor',
    name: 'Compressor',
    description: 'Controle de dinâmica profissional',
    category: 'dynamics',
    color: 'from-purple-600 to-purple-700',
    bgColor: 'bg-purple-600/10',
    borderColor: 'border-purple-500/30',
    parameters: ['Threshold', 'Ratio: 1:1-∞:1', 'Attack/Release']
  }
]

export default function Effects() {
  const [selectedEffect, setSelectedEffect] = useState(effects[0])

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 via-gray-900/80 to-black/50"></div>
      
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
            Efeitos
            <span className="bg-gradient-to-r from-red-400 via-blue-400 to-green-400 bg-clip-text text-transparent ml-4">
              Profissionais
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            9 efeitos de alta qualidade com processamento em tempo real e controles precisos
          </p>
        </motion.div>

        {/* Interactive Pedalboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-20"
        >
          {/* Effects Grid - Layout de pedaleira real */}
          <div className="grid grid-cols-3 gap-4 p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
            <h3 className="col-span-3 text-2xl font-bold text-white mb-6 text-center">
              🎸 Pedaleira Digital
            </h3>
            {effects.map((effect, index) => (
              <motion.button
                key={effect.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedEffect(effect)}
                className={`
                  relative p-4 rounded-2xl transition-all duration-300 border-2 group
                  ${selectedEffect.id === effect.id 
                    ? `bg-gradient-to-br ${effect.color} ${effect.borderColor} shadow-lg` 
                    : `bg-gray-700/60 border-gray-600/40 hover:${effect.bgColor} hover:${effect.borderColor}`
                  }
                `}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* LED Indicator */}
                <div className={`
                  absolute -top-1 -right-1 w-3 h-3 rounded-full transition-all duration-300
                  ${selectedEffect.id === effect.id 
                    ? 'bg-green-400 shadow-lg shadow-green-400/50 animate-pulse' 
                    : 'bg-gray-500'
                  }
                `} />
                
                <div className="text-white font-bold text-sm mb-1 text-center">
                  {effect.name}
                </div>
                
                {/* Knob simulation */}
                <div className={`
                  w-8 h-8 mx-auto rounded-full border-2 relative
                  ${selectedEffect.id === effect.id 
                    ? 'border-white bg-gray-200' 
                    : 'border-gray-400 bg-gray-600'
                  }
                `}>
                  <div className={`
                    absolute w-0.5 h-3 top-0.5 left-1/2 transform -translate-x-1/2 rounded-full
                    ${selectedEffect.id === effect.id ? 'bg-gray-800' : 'bg-gray-300'}
                  `} />
                </div>
              </motion.button>
            ))}
            
            {/* Signal Chain Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="col-span-3 mt-6 p-4 bg-gray-800/60 rounded-xl border border-gray-700/40"
            >
              <div className="flex items-center justify-center gap-3 text-sm text-gray-300">
                <span className="text-2xl">🎸</span>
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-medium">
                  ToneForge
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-green-400"></div>
                <span className="text-2xl">🔊</span>
              </div>
              <p className="text-center text-xs text-gray-400 mt-3">
                Cadeia de Sinal Digital em Tempo Real
              </p>
            </motion.div>
          </div>

          {/* Effect Details */}
          <motion.div
            key={selectedEffect.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-8"
          >
            <div className={`
              p-8 rounded-3xl border-2 ${selectedEffect.bgColor} ${selectedEffect.borderColor} backdrop-blur-sm
            `}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`
                  w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedEffect.color} 
                  flex items-center justify-center shadow-xl
                `}>
                  <Volume2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {selectedEffect.name}
                  </h3>
                  <span className={`
                    text-sm px-3 py-1 rounded-full font-medium capitalize
                    ${selectedEffect.category === 'distortion' ? 'bg-red-100 text-red-800' :
                      selectedEffect.category === 'modulation' ? 'bg-blue-100 text-blue-800' :
                      selectedEffect.category === 'time' ? 'bg-green-100 text-green-800' :
                      selectedEffect.category === 'filter' ? 'bg-yellow-100 text-yellow-800' :
                      selectedEffect.category === 'dynamics' ? 'bg-purple-100 text-purple-800' :
                      'bg-indigo-100 text-indigo-800'
                    }
                  `}>
                    {selectedEffect.category}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {selectedEffect.description}
              </p>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Parâmetros
                </h4>
                
                <div className="space-y-3">
                  {selectedEffect.parameters.map((param, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                      <span className="text-gray-300">{param}</span>
                    </div>
                  ))}
                </div>

                {/* Simulated Controls */}
                <div className="mt-8 p-6 bg-gray-800/40 rounded-2xl border border-gray-700/40">
                  <h5 className="text-lg font-bold text-white mb-4">Controles</h5>
                  <div className="grid grid-cols-2 gap-4">
                    {['Level', 'Mix'].map((control, index) => (
                      <div key={index} className="text-center">
                        <div className="text-sm text-gray-400 mb-2">{control}</div>
                        <div className="w-12 h-12 mx-auto bg-gradient-to-br from-gray-600 to-gray-700 rounded-full border-2 border-gray-500 relative">
                          <div className="absolute w-0.5 h-4 bg-white top-1 left-1/2 transform -translate-x-1/2 rounded-full" />
                        </div>
                        <div className="text-xs text-gray-500 mt-1">75%</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reset Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset Parâmetros
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Technical Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-500/20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Processamento de Áudio Profissional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">&lt; 3ms</div>
              <div className="text-gray-300">Latência Ultra-Baixa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">48kHz</div>
              <div className="text-gray-300">Sample Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">32-bit</div>
              <div className="text-gray-300">Processamento Float</div>
            </div>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Engine de áudio C++ nativo com algoritmos otimizados para performance em tempo real.
            Todos os efeitos são processados com qualidade de estúdio profissional.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 