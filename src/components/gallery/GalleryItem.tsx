import Image from "next/image"
import { Job } from "../../interfaces"

interface Props {
  job: Job
}

export const GalleryItem = ({job} : Props) => {
  return (
    <Image
    src={`/jobs/${job.image}.avif`}
    alt={job.title} 
    width={400}
    height={400}
    quality={40}
    layout="layout"
    className="mb-2 sm:mb-4 object-cover"
  />
  )
}
