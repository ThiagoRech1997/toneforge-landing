# 🎸 ToneForge Landing Page

Landing page moderna e responsiva para o aplicativo Android **ToneForge** - uma pedaleira digital profissional com processamento de áudio em tempo real.

## 🚀 Sobre o Projeto

Esta landing page foi desenvolvida para promover o ToneForge, um aplicativo Android revolucionário que transforma dispositivos móveis em estações de criação musical completas. A página apresenta todas as funcionalidades do app de forma atrativa e profissional.

### ✨ Características da Landing Page

- **Design Moderno**: Interface dark com gradientes e animações suaves
- **Totalmente Responsiva**: Otimizada para desktop, tablet e mobile
- **Performance Otimizada**: Carregamento rápido e smooth scrolling
- **SEO Friendly**: Meta tags otimizadas e structured data
- **Animações Fluidas**: Utilizando Framer Motion
- **Acessibilidade**: Seguindo padrões WCAG

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Fonte**: Inter (Google Fonts)

## 📱 Sobre o ToneForge

O **ToneForge** é uma pedaleira digital profissional para Android que oferece:

### 🎛️ Funcionalidades Principais

- **9 Efeitos Profissionais**: Ganho, Distorção, Delay, Reverb, Chorus, Flanger, Phaser, EQ, Compressor
- **Baixa Latência**: < 3ms para performance ao vivo
- **Looper Multi-track**: Gravação e reprodução com visualização waveform
- **Afinador Preciso**: Detecção de frequência fundamental
- **Metrônomo Avançado**: Controle de BPM e subdivisões
- **Sistema de Presets**: Salvar e compartilhar configurações
- **Suporte MIDI**: MIDI Learn para controle externo
- **Gravador Profissional**: Exportação em múltiplos formatos

### 🔧 Especificações Técnicas

- **Plataforma**: Android 8.1+ (API 27)
- **Arquiteturas**: ARM64, ARM32, x86, x86_64
- **Engine**: C++ nativo com JNI
- **Audio API**: AudioRecord/AudioTrack
- **Sample Rate**: 48kHz
- **Formato**: PCM Float 32-bit
- **Arquitetura**: MVP (Model-View-Presenter)

## 🚦 Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd toneforge-landing

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm run start

# Lint
npm run lint
```

## 📁 Estrutura do Projeto

```
toneforge-landing/
├── app/
│   ├── components/           # Componentes da landing page
│   │   ├── Hero.tsx         # Seção principal
│   │   ├── Features.tsx     # Funcionalidades
│   │   ├── Effects.tsx      # Efeitos detalhados
│   │   ├── Screenshots.tsx  # Interface do app
│   │   ├── TechnicalSpecs.tsx # Especificações
│   │   ├── Download.tsx     # Download e instalação
│   │   └── Footer.tsx       # Rodapé
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── public/                  # Assets estáticos
├── package.json
└── README.md
```

## 🎨 Seções da Landing Page

### 1. **Hero Section**
- Apresentação principal do ToneForge
- Estatísticas de downloads e avaliação
- Call-to-action para download
- Animações de background

### 2. **Features Section**
- Grid com 9 funcionalidades principais
- Ícones e descrições detalhadas
- Animações on-scroll

### 3. **Effects Section**
- Demonstração interativa da pedaleira
- Seleção de efeitos com preview
- Visualização de parâmetros

### 4. **Screenshots Section**
- Mockup de smartphone com navegação
- Interface do aplicativo
- Carousel interativo

### 5. **Technical Specs**
- Especificações detalhadas
- Gráficos de performance
- Requisitos do sistema

### 6. **Download Section**
- Botões de download
- Instruções de instalação
- Links para comunidade

### 7. **Footer**
- Informações do desenvolvedor
- Links úteis
- Stack tecnológico

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔍 SEO

- Meta tags otimizadas
- Open Graph e Twitter Cards
- Structured Data (JSON-LD)
- Sitemap automático
- Robots.txt configurado

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# Deploy automático via GitHub
# Conecte o repositório no Vercel Dashboard
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
out/
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📱 Responsividade

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **Ultra-wide**: 1440px+

## ♿ Acessibilidade

- Navegação por teclado
- Leitores de tela compatíveis
- Alto contraste suportado
- Animações respeitam `prefers-reduced-motion`
- Skip links implementados

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Desenvolvedor

**Thiago Fernando Rech**
- Android Developer & Audio Enthusiast
- GitHub: [@ThiagoRech1997](https://github.com/ThiagoRech1997)
- Email: thiago.rech@example.com

## 🎵 Sobre o ToneForge

O ToneForge representa anos de desenvolvimento e paixão por música e tecnologia. Criado para democratizar o acesso a ferramentas musicais profissionais, o app é 100% gratuito e open source.

### 🏆 Conquistas

- 50k+ downloads
- 4.8/5 estrelas nas avaliações
- Comunidade ativa de músicos
- Performance profissional comprovada

---

**ToneForge** - Transformando Android em uma ferramenta musical profissional! 🎸✨
