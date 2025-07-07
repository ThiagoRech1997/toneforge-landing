'use client'

import { motion } from 'framer-motion'
import { 
  Zap, 
  Music, 
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
    icon: <Music className="w-8 h-8" />,
    title: "9 Efeitos Profissionais",
    description: "Ganho, Distorção, Delay, Reverb, Chorus, Flanger, Phaser, EQ e Compressor com controles precisos",
    gradient: "from-blue-600 to-purple-600",
    bgColor: "bg-blue-600/10",
    borderColor: "border-blue-500/30"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Baixa Latência",
    description: "Processamento em tempo real com latência inferior a 3ms usando código nativo C++",
    gradient: "from-green-600 to-teal-600",
    bgColor: "bg-green-600/10",
    borderColor: "border-green-500/30"
  },
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
    title: "MIDI Support",
    description: "Controle via MIDI com MIDI Learn para mapeamento automático de controles",
    gradient: "from-cyan-600 to-teal-600",
    bgColor: "bg-cyan-600/10",
    borderColor: "border-cyan-500/30"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Sistema de Aprendizado",
    description: "Módulos educativos sobre teoria musical, acordes e técnicas de guitarra",
    gradient: "from-emerald-600 to-green-600",
    bgColor: "bg-emerald-600/10",
    borderColor: "border-emerald-500/30"
  }
]

export default function Features() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-gray-900/80 to-gray-800/50"></div>
      
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
            Funcionalidades
            <span className="text-gradient-effects ml-4">
              Completas
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Uma suíte completa de ferramentas musicais profissionais em um único aplicativo
          </p>
        </motion.div>

        {/* Features Grid - usando design do app */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`
                group p-8 rounded-3xl border-2 backdrop-blur-sm transition-all duration-300 h-full flex flex-col
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

        {/* CTA Section - inspirado no design do app */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20 rounded-3xl p-12 md:p-16 border border-blue-500/20 backdrop-blur-sm relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/25 animate-pulse-glow">
                  <Music className="w-10 h-10 text-white" />
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Pronto para Transformar sua Música?
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Baixe agora e descubra por que milhares de músicos escolhem o ToneForge para suas criações
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg md:text-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 min-w-[250px] group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative z-10">Começar Agora - Grátis</span>
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-green-500/60 hover:border-green-400 rounded-full text-white hover:bg-green-500/10 font-semibold text-lg md:text-xl transition-all duration-300 min-w-[200px]"
                >
                  Ver Demonstração
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50k+</div>
                  <div className="text-gray-300">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">4.8★</div>
                  <div className="text-gray-300">Avaliação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-gray-300">Gratuito</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 