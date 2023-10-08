import './globals.css'


export const metadata = {
  title: 'Components Interview',
  description: 'Practice',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
    <main className="app flex">
      {children}
    </main>
      
    </body>
      
    </html>
  )
}
