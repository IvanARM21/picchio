import { AboutSection, GallerySection } from "@/components";
import { ServicesSection } from "@/components/services/ServicesSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <AboutSection />

      <main className="max-w-screen-2xl mx-auto my-16 px-2 sm:px-4 space-y-16">
        <GallerySection />

        <ServicesSection />

        <TestimonialsSection />
      </main>
    </>
  );
}
