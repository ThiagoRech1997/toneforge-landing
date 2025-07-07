'use client'

import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Cpu, 
  HardDrive, 
  Headphones, 
  Clock, 
  Code2,
  Shield,
  Zap
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
    icon: <Zap className="w-6 h-6" />,
    specs: [
      { label: "Latência", value: "< 3ms" },
      { label: "CPU Usage", value: "< 15%" },
      { label: "Threads", value: "4 (áudio real-time)" },
      { label: "Oversampling", value: "2x, 4x, 8x" }
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
    details: ["JNI Interface", "SIMD Optimization", "Memory Pool Allocation"]
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Baixa Latência",
    description: "Otimizado para latência inferior a 3ms em dispositivos compatíveis",
    details: ["Real-time Threading", "Lock-free Algorithms", "Double Buffering"]
  },
  {
    icon: <HardDrive className="w-8 h-8" />,
    title: "Eficiência de Recursos",
    description: "Uso mínimo de CPU e memória para máxima duração da bateria",
    details: ["Power Management", "CPU Throttling", "Memory Optimization"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Estabilidade",
    description: "Arquitetura robusta com tratamento avançado de erros",
    details: ["Error Recovery", "State Persistence", "Crash Prevention"]
  }
]

export default function TechnicalSpecs() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 via-black/80 to-gray-900/50"></div>
      
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
            Especificações
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent ml-4">
              Técnicas
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Performance profissional com tecnologia de ponta e otimização avançada
          </p>
        </motion.div>

        {/* Technical Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {technicalSpecs.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -4 }}
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

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-900/30 via-cyan-900/20 to-purple-900/30 rounded-3xl p-8 md:p-12 border border-purple-500/30 backdrop-blur-sm mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Performance Benchmark
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                metric: "Latência",
                value: "2.8ms",
                description: "Média em dispositivos flagship",
                color: "from-green-500 to-emerald-500",
                percentage: 95
              },
              { 
                metric: "CPU Usage",
                value: "12%",
                description: "Com 9 efeitos ativos simultaneamente",
                color: "from-blue-500 to-cyan-500",
                percentage: 88
              },
              { 
                metric: "Estabilidade",
                value: "99.9%",
                description: "Uptime em sessões longas",
                color: "from-purple-500 to-pink-500",
                percentage: 99
              }
            ].map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative w-36 h-36 mx-auto mb-8">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="rgb(75 85 99)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                      whileInView={{ 
                        strokeDashoffset: 2 * Math.PI * 40 * (1 - metric.percentage / 100)
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: index * 0.2 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgb(168 85 247)" />
                        <stop offset="100%" stopColor="rgb(6 182 212)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">{metric.value}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{metric.metric}</h4>
                <p className="text-gray-300 text-base">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* System Requirements Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/40 max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">Requisitos Recomendados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="text-left">
                <h4 className="text-xl font-semibold text-cyan-400 mb-6 flex items-center gap-3">
                  <Cpu className="w-6 h-6" />
                  Hardware
                </h4>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span>Snapdragon 660+ ou equivalente</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span>4GB RAM ou superior</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span>Android 10+ para melhor performance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span>Fones de ouvido com baixa latência</span>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-cyan-400 mb-6 flex items-center gap-3">
                  <Code2 className="w-6 h-6" />
                  Software
                </h4>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span>Modo desenvolvedor ativado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span>Buffer de áudio otimizado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span>Permissões de áudio concedidas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span>Apps de otimização desabilitados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 