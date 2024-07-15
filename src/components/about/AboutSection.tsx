import Image from "next/image"
import { BiLogoFacebookCircle, BiLogoInstagramAlt } from "react-icons/bi"

export const AboutSection = () => {
  return (
    <section className="relative mb-10 mt-20" id="sobre-nosotros">

        <div className="absolute bg-black bg-opacity-50 inset-0 max-w-[1920px] mx-auto"/>
        <Image 
            src="/herreria.webp" 
            className=" max-h-[650px] min-h-[450px] object-center w-full object-cover max-w-[1920px] mx-auto" 
            alt="Hero Image"
            width={1200}
            height={800} 
            priority
        />
        
        <div className="absolute top-1/2 -translate-y-1/2 w-full ">
            <div className="max-w-screen-2xl mx-auto flex flex-col gap-2 sm:flex-row sm:items-center justify-between px-2 sm:px-4">
                <div className="flex flex-col gap-2 ">
                    <h1 className=" text-white font-black text-4xl sm:text-5xl 2xl:text-7xl">
                        Somos <span className="rounded-lg bg-color-primary px-2">Picchio</span>
                        </h1>

                    <p className="text-xl text-white">Elaboración de piezas únicas en hierro y madera, dirigido a la gastronomía y al hogar</p>

                    <div className="flex gap-3">
                        <a 
                            aria-label="Enlace a nuestro Instagram"
                            href="https://www.instagram.com/ivanrm021/"
                        >
                            <BiLogoInstagramAlt 
                                className="text-white bg-color-links rounded-full p-2 transition-colors duration-300"
                                size={50}
                            />
                        </a>
                        <a 
                            aria-label="Enlace a nuestro Facebook"
                            href="https://www.facebook.com/?locale=es_LA"
                        >
                            <BiLogoFacebookCircle 
                                className="text-white bg-color-links rounded-full p-2 transition-colors duration-300"
                                size={50}
                            />
                        </a>
                    </div>
                </div>
                
                <a href="#contacto" className="block w-fit bg-color-primary-hover text-2xl transition-colors duration-300 text-white px-5 py-3 font-bold rounded-lg">Contáctanos</a>
            </div>
        </div>
    </section>
)
}
