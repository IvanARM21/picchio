import { FaQuoteLeft, FaStar } from "react-icons/fa6"
import { Testimony } from "../../interfaces/testimony.interface"

interface Props {
  testimony: Testimony
}

export const TestimonyItem = ({testimony} : Props) => {

  const formattedQualification = testimony.qualification.toFixed(1);

  return (
    <div className="shadow-lg rounded-xl p-5 flex flex-col gap-3 text-slate-700">
        <FaQuoteLeft size={30}/>
        <p>{testimony.comment}</p>
        <div className="flex justify-around">
            <p className="font-bold">- {testimony.author}</p>
            <div className="flex font-bold text-xl items-center gap-1 text-amber-500">
                {formattedQualification}
                <FaStar size={26} />
            </div>
        </div>
    </div>
  )
}
