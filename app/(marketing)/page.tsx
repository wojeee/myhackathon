import { HeroSection } from "@/components/component/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">About MYHackathon</h2>
          {/* Add content about the hackathon */}
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Event Timeline</h2>
          {/* Add timeline or other information */}
        </div>
      </section>
      {/* Add more sections as needed */}
    </>
  );
}
