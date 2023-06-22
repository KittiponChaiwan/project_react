import '../globals.css'
// import { NotoSansThai } from 'next/font/google'

// const inter = NotoSansThai({ subsets: ['latin'] })

export const metadata = {
  title: 'Datauser',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>{children}</body>
    </html>
  )
}
