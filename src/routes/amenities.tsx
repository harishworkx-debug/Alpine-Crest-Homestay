import { createFileRoute, Link } from "@tanstack/react-router";
import { pageMeta, WA } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { AmenityIcon } from "@/components/site/AmenityIcon";
import { amenitiesList } from "@/lib/content";

export const Route = createFileRoute("/amenities")({
  head: () =>
    pageMeta({
      title: "Homestay Amenities in Theog, Himachal Pradesh | Alpine Crest",
      description:
        "Facilities at Alpine Crest Homestay in Kathot near Theog: Free Wi-Fi, private parking, power backup, sunrise balcony views, home-cooked Himachali food, 24/7 hot water, and quiet apple orchard surroundings.",
      path: "/amenities",
    }),
  component: AmenitiesPage,
});

function AmenitiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Amenities" }]} />

      <section className="container-page py-10">
        <span className="eyebrow">Homestay Facilities &amp; Comfort</span>
        <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl font-display">
          Homestay Amenities in Theog, Himachal Pradesh
        </h1>
        <p className="mt-4 max-w-2xl text-lg font-semibold text-moss">
          Everything You Need for a Comfortable Mountain Stay
        </p>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          The experience at Alpine Crest Homestay is about practical comfort and peaceful mountain living. These are the genuine facilities we offer at our home in Village Kathot near Theog.
        </p>
      </section>

      {/* Amenities Grid */}
      <section className="container-page grid gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {amenitiesList.map((a) => (
          <div
            key={a.label}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <AmenityIcon name={a.icon} className="h-7 w-7 text-moss" />
            <h2 className="mt-4 text-xl font-display text-foreground">{a.label}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {a.description}
            </p>
          </div>
        ))}
      </section>

      {/* Peaceful Environment Feature Section */}
      <section className="container-page grid gap-10 py-16 lg:grid-cols-2 lg:items-center border-t border-border">
        <div>
          <span className="eyebrow">Stay Close to Nature</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display">A Quiet Alternative to Commercial Hotels</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Alpine Crest Homestay sits above the apple orchards of Village Kathot, a short distance from Theog town. Days here are unhurried — morning tea on the sunrise balcony, walks through the orchard, fresh home-cooked meals, and quiet evenings where you hear only the wind in the deodars. It is a peaceful contrast to crowded hotel hubs in Shimla or central Kufri.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppLink message={WA.general}>Check Room Availability</WhatsAppLink>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              View Rooms &amp; Rates
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { t: "Mountain Vistas", s: "180° panoramic views of Shali Tibba peaks and deodar valley." },
            { t: "Pine Forest Surroundings", s: "Fresh high-altitude air and quiet natural walking trails." },
            { t: "Peaceful Atmosphere", s: "Zero highway traffic noise — serene village environment." },
            { t: "Host Guidance", s: "Personalized travel advice and local assistance from host Sahil." },
          ].map((item) => (
            <div key={item.t} className="rounded-xl border border-border bg-card p-5 shadow-soft">
              <h3 className="text-lg font-display text-foreground">{item.t}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.s}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
