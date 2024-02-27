import type { PropsWithChildren } from "react"
import { NavLink } from "react-router-dom"
import type { Path } from "src/router"

export interface NavbarOptionProps {
  displayName: string
  uri: Path
}

export const Navbar: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <nav className="my-4 flex justify-items-center">
      {children}
    </nav>
  )
}

export const NavbarOption: React.FC<NavbarOptionProps> = ({ displayName, uri }) => {
  return (
    <NavLink to={uri} className="nav-link">
      {displayName}
    </NavLink>
  )
}
