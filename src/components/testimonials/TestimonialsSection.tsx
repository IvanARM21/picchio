import { TitleSection } from "@/components/ui/title/TitleSection"
import { TestimonialsGrid } from "./TestimonialsGrid"

export const TestimonialsSection = () => {
  return (
    <section id="testimonios">
        <TitleSection 
            title="Testimonios"
        />
          <TestimonialsGrid />
        </section>
  )
}
