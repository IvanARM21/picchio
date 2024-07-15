import { Service } from "@/interfaces"

interface Props {
    service: Service
}

export const ServiceItem = ({ service } : Props) => {
  return (
    <article className="bg-slate-50 rounded-xl flex flex-col gap-5 items-center px-5 py-4 shadow-lg">
        <service.icon size={120} className="text-teal-600" />
        <h3 className="text-3xl font-bold">{service.label}</h3>
        <p className="text-center text-lg">{service.text}</p>
    </article>
  )
}
