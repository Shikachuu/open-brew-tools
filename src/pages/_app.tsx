import { Outlet } from "react-router-dom"
import "../index.css"
import { Navbar, NavbarOption } from "@components/ui/navbar"

export default function Layout() {
  return (
    <>
      <Navbar>
        <NavbarOption displayName="Home" uri="/" />
        <NavbarOption displayName="Lotus Water Calculator" uri="/water" />
      </Navbar>
      <div className="p-4">
        <Outlet />
      </div>
      <div className="dot-mask -z-30" />
      <footer className="mt-4">
        <hr className="border-4 border-black border-dashed" />
        <p className="text-center m-4 text-gray-400">
          Made with love and a lot of coffee.
          <small>Find the source code here!</small>
        </p>
      </footer>
    </>
  )
}
