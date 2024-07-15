import { FaHammer, FaTruck } from "react-icons/fa"
import { GiAnvil } from "react-icons/gi"
import { Service } from "../interfaces"

export const services : Service[] = [
    {
        id: 1,
        icon: FaHammer,
        label: "Carpintería",
        text: "Realizamos trabajos de carpintería personalizados"
    },
    {
        id: 2,
        icon: GiAnvil,
        label: "Herrería",
        text: "Realizamos trabajos de herrería personalizados"
    },
    {
        id: 3,
        icon: FaTruck,
        label: "Envios",
        text: "Realizamos envios a todo el Uruguay"
    },
]