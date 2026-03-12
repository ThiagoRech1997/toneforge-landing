'use client'

import { motion } from 'framer-motion'
import {
  Mic,
  Timer,
  Volume2,
  Settings,
  Headphones,
  Radio,
  BookOpen
} from 'lucide-react'

const features = [
  {
    icon: <Volume2 className="w-8 h-8" />,
    title: "Looper Multi-track",
    description: "Grave e reproduza loops com múltiplas tracks, efeitos de speed/pitch e visualização waveform",
    gradient: "from-purple-600 to-indigo-600",
    bgColor: "bg-purple-600/10",
    borderColor: "border-purple-500/30"
  },
  {
    icon: <Mic className="w-8 h-8" />,
    title: "Afinador Preciso",
    description: "Detecção de frequência fundamental com calibração e suporte a diferentes temperamentos",
    gradient: "from-cyan-600 to-blue-600",
    bgColor: "bg-cyan-600/10",
    borderColor: "border-cyan-500/30"
  },
  {
    icon: <Timer className="w-8 h-8" />,
    title: "Metrônomo Avançado",
    description: "Controle de BPM, subdivisões e padrões rítmicos para prática musical",
    gradient: "from-red-600 to-pink-600",
    bgColor: "bg-red-600/10",
    borderColor: "border-red-500/30"
  },
  {
    icon: <Radio className="w-8 h-8" />,
    title: "Gravador Profissional",
    description: "Grave suas performances com qualidade de estúdio e exporte em diferentes formatos",
    gradient: "from-indigo-600 to-purple-600",
    bgColor: "bg-indigo-600/10",
    borderColor: "border-indigo-500/30"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Sistema de Presets",
    description: "Salve, carregue e compartilhe suas configurações favoritas com sistema de favoritos",
    gradient: "from-gray-600 to-slate-600",
    bgColor: "bg-gray-600/10",
    borderColor: "border-gray-500/30"
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Suporte MIDI",
    description: "Controle via controladores MIDI externos com MIDI Learn para mapeamento de parâmetros",
    gradient: "from-cyan-600 to-teal-600",
    bgColor: "bg-cyan-600/10",
    borderColor: "border-cyan-500/30"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Sistema de Aprendizado",
    description: "Módulo educativo com conteúdo sobre teoria musical e técnicas de guitarra",
    gradient: "from-emerald-600 to-green-600",
    bgColor: "bg-emerald-600/10",
    borderColor: "border-emerald-500/30"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-gray-900/80 to-gray-800/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Funcionalidades
            <span className="text-gradient-effects ml-4">
              Completas
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Todas as ferramentas que um guitarrista precisa para praticar e criar
          </p>
        </motion.div>

        {/* Features Grid - usando design do app */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`
                relative group p-8 rounded-3xl border-2 backdrop-blur-sm transition-all duration-300 h-full flex flex-col
                ${feature.bgColor} ${feature.borderColor} hover:border-opacity-60
              `}
            >
              {/* Icon */}
              <div className={`
                w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl 
                flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl
                transition-all duration-300 group-hover:scale-110
              `}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className={`
                absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} 
                opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none
              `} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
} 