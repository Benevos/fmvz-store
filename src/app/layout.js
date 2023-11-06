import '../scss/globals.scss';

export const metadata = {
  title: 'Tienda UAT',
  description: '#AquíComienzaTodo',
  icons: {
    icon: 'UAT-WIN.jpg'
  },
  openGraph: {
    title: 'Tienda UAT',
    description: '#AquíComienzaTodo',
    type: 'website',
    url: 'https://fmvz-store.vercel.app/',
    siteName: 'Tienda UAT',
    locale: 'es_MX',
    images: [
      {
        url: 'https://fmvz-store.vercel.app/UAT-WIN.jpg',
        width: '800',
        height: '800',
        alt: 'uat-logo.png'
      }
    ]
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}
