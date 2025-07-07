/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para exportação estática
  output: 'export',
  
  // Configurações de performance
  compress: true,
  poweredByHeader: false,
  
  // Otimizações de imagem
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true, // Necessário para exportação estática
  },

  // Webpack otimizações
  webpack: (config, { dev, isServer }) => {
    // Otimizações para produção
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        framer: {
          name: 'framer-motion',
          test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
          chunks: 'all',
          priority: 30,
        },
        lucide: {
          name: 'lucide-react',
          test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
          chunks: 'all',
          priority: 25,
        },
      }
    }

    return config
  },

  // Configurações experimentais
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
}

module.exports = nextConfig 