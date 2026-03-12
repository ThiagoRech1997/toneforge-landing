/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  // Configuração para exportação estática
  output: 'export',
  
  // Adiciona basePath e assetPrefix para GitHub Pages
  basePath: isGithubPages ? '/toneforge-landing' : '',
  assetPrefix: isGithubPages ? '/toneforge-landing/' : '',
  
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

  // Turbopack (padrão no Next.js 16)
  turbopack: {},

  // Configurações experimentais
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
}

module.exports = nextConfig 