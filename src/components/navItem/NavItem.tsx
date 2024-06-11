"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
  navTo: string
}

function NavItem({ navTo }: Props) {
  const path = usePathname()
  const highlighter = (navTo: string) => {
    return navTo === path ? null : "text-slate-400"
  }
  const title =
    navTo === "/" ? "Home" : navTo.charAt(1).toUpperCase() + navTo.slice(2)

  return (
    <li className={highlighter(navTo) + " w-24"}>
      <Link href={navTo}>{title}</Link> {navTo === path ? "<--" : null}
    </li>
  )
}

export default NavItem
