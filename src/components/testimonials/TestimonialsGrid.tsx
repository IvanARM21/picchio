import { Testimonials } from "@/data"
import { TestimonyItem } from "./TestimonyItem"

export const TestimonialsGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Testimonials.map(testimony => (
            <TestimonyItem 
                key={testimony.id}
                testimony={testimony}
            />
        ))}        
    </div>
  )
}
