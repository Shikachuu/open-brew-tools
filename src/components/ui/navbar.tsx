"use client"

import type { Url } from "node:url"
import Link from "next/link"
import type { PropsWithChildren } from "react"
import { cn } from "@lib/utils"
import { usePathname } from "next/navigation"

export const Navbar: React.FC<PropsWithChildren> = ({ children }) => {
  return <nav className="my-4 flex justify-items-center">{children}</nav>
}

export interface NavbarOptionProps {
  displayName: string
  uri: Url | string
}

export const NavbarOption: React.FC<NavbarOptionProps> = ({ displayName, uri }) => {
  const pathName = usePathname()

  return (
    <Link href={uri} className={cn(`nav-link ${pathName === uri ? "active" : ""}`)}>
      {displayName}
    </Link>
  )
}
