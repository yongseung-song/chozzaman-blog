import NavItem from "../navItem"

function Navigation() {
  return (
    <nav>
      <ul className="flex w-screen justify-around py-3">
        <NavItem navTo="/" />
        <NavItem navTo="/about" />
        <NavItem navTo="/portfolio" />
        <NavItem navTo="/blog" />
      </ul>
    </nav>
  )
}

export default Navigation
