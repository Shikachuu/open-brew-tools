import type { Metadata } from "next"
import "./globals.css"
import { Navbar, NavbarOption } from "@components/ui/navbar"

export const metadata: Metadata = {
  title: "Open Brew Tools",
  description: "A set of tools that makes your day-to-day brews that better!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen justify-between">
        <Navbar>
          <NavbarOption displayName="Home" uri="/" />
          <NavbarOption displayName="Lotus Water Calculator" uri="/water" />
          <NavbarOption displayName="Brew Ratio Calculator" uri="/ratio" />
        </Navbar>
        <div className="dot-mask -z-30" />
        <main className="p-4 mb-auto">
          {children}
        </main>
        <footer className="mt-4">
          <hr className="border-4 border-black border-dashed" />
          <p className="text-center m-4 text-gray-400">
            Made with love and a lot of coffee.
            <sup><a href="https://github.com/Shikachuu/open-brew-tools">Find the source code here!</a></sup>
          </p>
        </footer>

      </body>
    </html>
  )
}
