import { TitleSection } from "@/components/ui/title/TitleSection"
import { ServicesGrid } from "./ServicesGrid"

export const ServicesSection = () => {
  return (
    <section id="servicios">
        <TitleSection 
            title="Servicios"
        />
        
        <ServicesGrid />
    </section>
  )
}
