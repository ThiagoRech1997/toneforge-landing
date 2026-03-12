'use client'

import { motion } from 'framer-motion'
import {
  Smartphone,
  Cpu,
  HardDrive,
  Headphones,
  Clock,
  Code2,
  Shield
} from 'lucide-react'

const technicalSpecs = [
  {
    category: "Compatibilidade",
    icon: <Smartphone className="w-6 h-6" />,
    specs: [
      { label: "Android Mínimo", value: "8.1 (API 27)" },
      { label: "Arquiteturas", value: "ARM64, ARM32, x86, x86_64" },
      { label: "RAM Mínima", value: "2GB (4GB recomendado)" },
      { label: "Armazenamento", value: "50MB" }
    ]
  },
  {
    category: "Áudio",
    icon: <Headphones className="w-6 h-6" />,
    specs: [
      { label: "Sample Rate", value: "48kHz" },
      { label: "Formato", value: "PCM Float 32-bit" },
      { label: "Canais", value: "Mono (entrada e saída)" },
      { label: "Buffer Size", value: "128-2048 samples" }
    ]
  },
  {
    category: "Performance",
    icon: <Clock className="w-6 h-6" />,
    specs: [
      { label: "Latência", value: "< 3ms" },
      { label: "CPU Usage", value: "Otimizado" },
      { label: "Threads", value: "Real-time Priority" }
    ]
  },
  {
    category: "Tecnologia",
    icon: <Code2 className="w-6 h-6" />,
    specs: [
      { label: "Core Engine", value: "C++ Nativo" },
      { label: "UI Framework", value: "Android Views + MVP" },
      { label: "Audio API", value: "AudioRecord/AudioTrack" },
      { label: "Threading", value: "Real-time Priority" }
    ]
  }
]

const features = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Processamento Nativo",
    description: "Engine de áudio escrito em C++ para máxima performance",
    details: ["JNI Interface", "NDK Build System", "CMake Integration"]
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Baixa Latência",
    description: "Otimizado para latência inferior a 3ms em dispositivos compatíveis",
    details: ["Real-time Threading", "Buffer Configurável", "Double Buffering"]
  },
  {
    icon: <HardDrive className="w-8 h-8" />,
    title: "Eficiência de Recursos",
    description: "Uso mínimo de CPU e memória para máxima duração da bateria",
    details: ["Background Processing", "Wake Lock", "Foreground Service"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Estabilidade",
    description: "Arquitetura robusta com tratamento avançado de erros",
    details: ["Error Recovery", "State Persistence", "Clean Architecture MVP"]
  }
]

export default function TechnicalSpecs() {
  return (
    <section id="specs" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 via-black/80 to-gray-900/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Especificações
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent ml-4">
              Técnicas
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Detalhes técnicos da arquitetura e do engine de áudio do ToneForge
          </p>
        </motion.div>

        {/* Technical Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {technicalSpecs.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/40 hover:border-gray-600/60 transition-all duration-300"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                  {category.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.specs.map((spec, specIndex) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (specIndex * 0.05) }}
                    className="flex justify-between items-center p-4 bg-gray-800/60 rounded-xl border border-gray-700/30"
                  >
                    <span className="text-gray-200 font-medium text-lg">{spec.label}:</span>
                    <span className="text-cyan-400 font-bold text-lg">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/40 group hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {feature.details.map((detail, detailIndex) => (
                  <motion.div
                    key={detail}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index * 0.15) + (detailIndex * 0.1) }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-3 h-3 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-200 text-base">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
} 