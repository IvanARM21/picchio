"use client";
import { NAV_ITEMS } from "@/consts"
import { CgClose } from "react-icons/cg"

interface Props {
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
    menu: boolean
}

export const MenuMobile = ({setMenu, menu} : Props) => {

  const hiddenMenu = () => {
    setMenu(false);
  }

  return (
    <nav
        className={`${menu ? "opacity-100 z-50" : "opacity-0 z-0"} transition-all duration-300 bg-black bg-opacity-80 backdrop-blur-sm fixed inset-0 flex flex-col justify-evenly items-center gap-5 md:hidden`}
    >
        <button
          onClick={hiddenMenu}
          className="absolute top-5 right-3 h-8 w-8 text-white"
        ><CgClose size={36}/></button>
        {NAV_ITEMS.map(item => (
            <a 
              href={item.url}
              key={item.url}
              onClick={hiddenMenu}
              className={`text-white hover:text-amber-900 ${!menu ? "hidden" : ""}`}
            >{item.label}</a>
        ))}
    </nav>
  )
}
