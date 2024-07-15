"use client";

import Masonry from "react-masonry-css"
import { jobs } from "../../data"
import { GalleryItem } from "./GalleryItem"


export const GalleryGrid = () => {
  const breakpointsColumns = {
    default: 4,
    992: 2,
  }
  return (
    <Masonry
      breakpointCols={breakpointsColumns}
      className="flex w-auto -ml-2 sm:-ml-4"
      columnClassName="pl-2 sm:pl-4 bg-clip-padding"
    >
      {jobs.map(job => (
        <GalleryItem 
          key={job.image}
          job={job}
        />
      ))}
    </Masonry>
  )
}
