import { ServiceItem } from "./ServiceItem"
import { services } from "@/consts"


export const ServicesGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-slate-700">
        {services.map(service => (
            <ServiceItem 
                key={service.id}
                service={service}
            />
        ))}
    </div>
  )
}
