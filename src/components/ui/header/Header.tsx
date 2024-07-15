import Image from "next/image";
import { Nav } from "./Nav";
import { FaBars } from "react-icons/fa";


export const Header = () => {

  

  return (
    <header className="fixed top-0 z-30 bg-white bg-opacity-50 backdrop-blur-sm  w-full py-2">
       <div className="flex flex-row h-16 gap-5 justify-between items-center max-w-screen-2xl mx-auto px-2 sm:px-4 ">
        <a 
          href="#"
          className="bg-color-primary rounded-full p-[2px]"
        >
             <Image 
                src="/picchio.png" 
                alt="Logo" 
                width={64}
                height={64}
            />
        </a>

        <Nav />
        
        <button
          type="button"
          // onClick={showMenu}
          aria-label="Menú"
          className="md:hidden"
        >
          <FaBars
            size={30}
          />
        </button>
       </div>
    </header>
  )
}
