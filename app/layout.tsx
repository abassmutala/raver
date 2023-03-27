import { Footer, Navbar } from "../components"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
