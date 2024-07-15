import { NAV_ITEMS } from "@/consts"
import { NavItem } from "./NavItem"

export const Nav = () => {
  return (
    <nav className="md:flex gap-5 items-center flex-row hidden">
        {NAV_ITEMS.map(item => (
            <NavItem
                key={item.url} 
                item={item}
            />
        ))}
    </nav>
  )
}
