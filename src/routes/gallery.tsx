import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { pageMeta } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { galleryImages } from "@/lib/content";

export const Route = createFileRoute("/gallery")({
  head: () =>
    pageMeta({
      title: "Gallery | Alpine Crest Homestay Theog",
      description:
        "Photos of Alpine Crest Homestay near Theog — rooms, balconies, mountain views, the lounge and home-cooked Himachali food.",
      path: "/gallery",
    }),
  component: GalleryPage,
});

const categories = [
  "All",
  "Rooms",
  "Balcony Views",
  "Snow Views",
  "Sunrise",
  "Food",
  "Property",
  "Bathroom",
  "Parking",
  "Surroundings",
];

function GalleryPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? galleryImages : galleryImages.filter((i) => i.category === active);

  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight" && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev !== null && prev < filtered.length - 1 ? prev + 1 : prev));
      }
      if (e.key === "ArrowLeft" && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filtered.length]);

  return (
    <>
      <Breadcrumbs items={[{ name: "Gallery" }]} />

      <section className="container-page py-10">
        <p className="eyebrow">Real Property Gallery</p>
        <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl">Alpine Crest, in pictures</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Explore actual photos of our rooms, private sunrise balconies, snow views, home-cooked Himachali food, and property surroundings in Kathot, near Theog.
        </p>
      </section>

      <section className="container-page pb-16">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border bg-card text-foreground hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid with Descriptive Captions */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((img, i) => (
            <div
              key={`${img.alt}-${i}`}
              onClick={() => setLightboxIndex(i)}
              className="cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:shadow-hover transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={765}
                  height={1020}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-white uppercase tracking-wider">
                  {img.category}
                </div>
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm font-medium leading-snug text-foreground group-hover:text-primary transition-colors">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Booking Prompt */}
        <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Like What You See?</h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Book direct with host Sahil Verma for verified low-rate guarantee, zero booking fees, and custom room preference.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919816656787?text=Hello%20Sahil,%20I%20saw%20the%20gallery%20and%20want%20to%20check%20room%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors shadow-soft"
            >
              Check Availability via WhatsApp
            </a>
            <a
              href="/rooms"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              View Room Rates & Inclusions
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300">
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            className={`absolute left-4 sm:left-10 text-white/70 hover:text-white transition-colors p-2 ${lightboxIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
            onClick={() => setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))}
            disabled={lightboxIndex === 0}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <div className="max-w-5xl max-h-[85vh] w-full px-16 flex flex-col items-center">
            <img 
              src={filtered[lightboxIndex].src} 
              alt={filtered[lightboxIndex].alt}
              className="max-h-[70vh] w-auto object-contain rounded shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                {filtered[lightboxIndex].category}
              </span>
              <p className="text-white text-base sm:text-lg font-medium max-w-2xl">{filtered[lightboxIndex].caption}</p>
            </div>
          </div>

          <button
            className={`absolute right-4 sm:right-10 text-white/70 hover:text-white transition-colors p-2 ${lightboxIndex === filtered.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
            onClick={() => setLightboxIndex((prev) => (prev !== null && prev < filtered.length - 1 ? prev + 1 : prev))}
            disabled={lightboxIndex === filtered.length - 1}
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </>
  );
}
