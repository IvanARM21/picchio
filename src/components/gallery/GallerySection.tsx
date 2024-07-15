import { TitleSection } from "../ui/title/TitleSection"
import { GalleryGrid } from "./GalleryGrid"

export const GallerySection = () => {
  return (
    <section id="galeria">
        <TitleSection
          title="Galería"
        />
        <GalleryGrid />
    </section>
  )
}
