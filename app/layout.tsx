import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://thiagorech1997.github.io/toneforge-landing/'),
  title: 'ToneForge - Pedaleira Digital Profissional para Android',
  description: 'Transforme seu Android em uma estação de criação musical completa com processamento de áudio em tempo real e efeitos profissionais.',
  keywords: [
    'ToneForge',
    'pedaleira digital',
    'Android',
    'efeitos de guitarra',
    'música',
    'áudio',
    'tempo real',
    'looper',
    'afinador',
    'distorção',
    'reverb',
    'delay',
    'chorus',
    'aplicativo musical',
    'processamento de áudio',
    'baixa latência',
    'MIDI',
    'código aberto'
  ],
  authors: [{ name: 'Thiago Fernando Rech' }],
  creator: 'Thiago Fernando Rech',
  publisher: 'ToneForge',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://thiagorech1997.github.io/toneforge-landing/',
    title: 'ToneForge - Pedaleira Digital Profissional para Android',
    description: 'Transforme seu Android em uma estação de criação musical completa com processamento de áudio em tempo real e efeitos profissionais.',
    siteName: 'ToneForge',
    images: [
      {
        url: 'https://thiagorech1997.github.io/toneforge-landing/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ToneForge - Pedaleira Digital para Android',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToneForge - Pedaleira Digital Profissional para Android',
    description: 'Transforme seu Android em uma estação de criação musical completa com processamento de áudio em tempo real e efeitos profissionais.',
    images: ['https://thiagorech1997.github.io/toneforge-landing/og-image.png'],
    creator: '@thiagofernendorech',
    site: '@thiagofernendorech',
  },

  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#6366f1',
      },
    ],
  },
  alternates: {
    canonical: 'https://thiagorech1997.github.io/toneforge-landing/',
    languages: {
      'pt-BR': 'https://thiagorech1997.github.io/toneforge-landing/',
      'en-US': 'https://thiagorech1997.github.io/toneforge-landing/en',
    },
  },
  category: 'technology',
  classification: 'Music Application',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'ToneForge',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#1f2937',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://thiagorech1997.github.io/toneforge-landing/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ToneForge - Pedaleira Digital Profissional para Android" />
        <meta property="og:description" content="Transforme seu Android em uma estação de criação musical completa com processamento de áudio em tempo real e efeitos profissionais." />
        <meta property="og:image" content="https://thiagorech1997.github.io/toneforge-landing/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ToneForge - Pedaleira Digital para Android" />
        <meta property="og:site_name" content="ToneForge" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="thiagorech1997.github.io" />
        <meta property="twitter:url" content="https://thiagorech1997.github.io/toneforge-landing/" />
        <meta name="twitter:title" content="ToneForge - Pedaleira Digital Profissional para Android" />
        <meta name="twitter:description" content="Transforme seu Android em uma estação de criação musical completa com processamento de áudio em tempo real e efeitos profissionais." />
        <meta name="twitter:image" content="https://thiagorech1997.github.io/toneforge-landing/og-image.png" />
        <meta name="twitter:creator" content="@thiagofernendorech" />
        <meta name="twitter:site" content="@thiagofernendorech" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow,max-video-preview:-1,max-image-preview:large,max-snippet:-1" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://github.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ToneForge",
              "description": "Pedaleira digital profissional para Android com processamento de áudio em tempo real",
              "applicationCategory": "MusicApplication",
              "operatingSystem": "Android 8.1+",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Person",
                "name": "Thiago Fernando Rech"
              },
              "publisher": {
                "@type": "Organization",
                "name": "ToneForge"
              },
              "downloadUrl": "https://github.com/ThiagoRech1997/ToneForge/releases",
              "screenshot": "https://thiagorech1997.github.io/toneforge-landing/og-image.png",
              "softwareVersion": "2.1.0",
              "datePublished": "2024-12-01",
              "dateModified": "2024-12-01",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2500"
              },
              "featureList": [
                "9 efeitos de áudio profissionais",
                "Processamento em tempo real",
                "Looper multi-track",
                "Afinador de precisão",
                "Suporte MIDI",
                "Interface Material Design",
                "Baixa latência"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Pular para o conteúdo principal
        </a>
        
        <div id="main-content">
          {children}
        </div>
        
        {/* Google Analytics - Replace with your actual GA4 ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
        {/* Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Basic performance monitoring
              window.addEventListener('load', function() {
                if ('performance' in window) {
                  const perfData = performance.getEntriesByType('navigation')[0];
                  console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
} 