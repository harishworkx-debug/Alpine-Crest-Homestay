import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Car, Wifi, UtensilsCrossed, Sunrise, ShieldCheck, Navigation, Clock, Tag } from "lucide-react";
import { WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CallLink } from "@/components/site/CallLink";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { exterior, deluxeBalcony, standardRoom } from "@/lib/images";
import { BookingForm } from "@/components/site/BookingForm";

export const Route = createFileRoute("/homestay-near-shimla")({
  head: () => ({
    meta: [
      { title: "Peaceful Homestay Near Shimla (38 km) | Mountain View Stay in Kathot, Theog" },
      {
        name: "description",
        content:
          "Looking for a peaceful homestay near Shimla? Alpine Crest Homestay in Kathot near Theog is 38 km (1 hr 15 mins) from Shimla Mall Road. Mountain views, private balconies, free parking & home-cooked meals.",
      },
      { property: "og:title", content: "Peaceful Homestay Near Shimla (38 km) | Mountain View Stay" },
      {
        property: "og:description",
        content:
          "Peaceful mountain homestay near Shimla (38 km). Sunrise balconies, free parking, home-cooked food, easy NH-5 road access.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.alpinecresthomestay.com/homestay-near-shimla/" },
    ],
    links: [{ rel: "canonical", href: "https://www.alpinecresthomestay.com/homestay-near-shimla/" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Homestay Near Shimla", path: "/homestay-near-shimla" },
      ]),
    ],
  }),
  component: HomestayAtShimlaPage,
});

function HomestayAtShimlaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Homestay Near Shimla" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-moss" /> Honest Location &amp; Verified Distance
          </span>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl font-display">
            Mountain View Homestay Near Shimla (38 km / 1 Hr 15 Mins Drive)
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Looking for a peaceful mountain homestay near Shimla away from crowded town traffic? <strong>Alpine Crest Homestay</strong> is located in Village Kathot, near Theog — exactly <strong>38 km (approx 1 hr 15 mins drive)</strong> east of Shimla on NH-5.
          </p>

          {/* Fact Pills */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-secondary px-3 py-1 text-foreground flex items-center gap-1">
              <Navigation className="h-3.5 w-3.5 text-moss" /> 38 km from Shimla Mall Road
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-foreground flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-moss" /> ~1 hr 15 mins drive via NH-5
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-foreground flex items-center gap-1">
              <Tag className="h-3.5 w-3.5 text-moss" /> Rooms from ₹2,300 (Meals Included)
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-foreground flex items-center gap-1">
              <Car className="h-3.5 w-3.5 text-moss" /> Free On-Site Parking
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppLink message={WA.location}>Check Availability on WhatsApp</WhatsAppLink>
            <CallLink variant="outline">Call Host Direct</CallLink>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
            >
              View Room Options
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img
            src={exterior}
            alt="Alpine Crest Homestay near Shimla, Himachal Pradesh"
            width={1360}
            height={1020}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Interactive Booking Search Form */}
      <section className="container-page pb-12">
        <BookingForm />
      </section>

      <section className="container-page grid gap-10 py-12 lg:grid-cols-2">
        <Reveal>
          <div className="prose-stay">
            <h2>A Peaceful Homestay Near Shimla (Village Kathot, Theog)</h2>
            <p>
              Shimla is the iconic capital of Himachal Pradesh, famous for its colonial-era Mall Road, the Ridge, and the UNESCO heritage toy train. While Shimla is wonderful for a daytime excursion, staying in the town center often means heavy traffic jams, expensive paid parking, crowded hotel alleys, and commercial noise.
            </p>
            <p>
              Alpine Crest Homestay offers an ideal peaceful alternative. Situated in <strong>Village Kathot near Theog (38 km from Shimla)</strong> along NH-5, our family-run homestay lets you explore Shimla during the day, then escape to pure mountain air, quiet apple orchards, and wide sunrise valley views in the evening.
            </p>

            <h2>Why Choose a Homestay Near Shimla Instead of City Centre?</h2>
            <ul>
              <li><strong>Zero City Crowds:</strong> Quiet, peaceful orchard setting with crisp mountain air and deodar forest paths.</li>
              <li><strong>Sunrise Valley Balconies:</strong> East-facing private balconies overlooking Shali Tibba range.</li>
              <li><strong>Free On-Site Private Parking:</strong> Secure parking right inside property gates (unlike congested Shimla paid lots).</li>
              <li><strong>Authentic Himachali Food:</strong> Freshly prepared home meals (Siddu, Rajma, Madra) served in the family lounge.</li>
              <li><strong>Easy NH-5 Access:</strong> 1 hour 15 mins drive to Shimla; 35 mins drive to Kufri; 1 hr 20 mins to Narkanda.</li>
              <li><strong>Direct Cab Assistance:</strong> Host Sahil Verma arranges verified local drivers for Shimla ISBT &amp; station pickup.</li>
            </ul>

            <h2>Rooms &amp; Balcony Views</h2>
            <p>
              Choose between our <strong>Standard Room (₹2,300/night)</strong> for a cozy wood-warmed stay with attached washroom, or our <strong>Deluxe Room (₹2,800/night)</strong> featuring full pine panelling and a private sunrise balcony overlooking the valley. Both room rates include home-cooked breakfast and dinner for two!
            </p>

            <h2>Travel Distance &amp; How to Reach From Shimla</h2>
            <p>
              Drive 38 km east on NH-5 from Shimla past Fagu (16 km) towards Theog. At Kathot junction, take Majhar Road for 200 metres. Regular state buses also run from Shimla ISBT to Theog bazaar, where a short 10-minute taxi brings you right to our door.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={deluxeBalcony}
                alt="Balcony view from Alpine Crest Homestay, a peaceful stay near Shimla"
                width={1360}
                height={1020}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Deluxe Room with Balcony</h3>
                  <span className="text-sm font-bold text-moss">₹2,800 / night</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Private sunrise balcony, sit-out nook, full pine panelling. Includes breakfast &amp; dinner.
                </p>
                <WhatsAppLink message={WA.deluxe} variant="primary" className="mt-4 px-5 py-2.5 w-full justify-center">
                  Enquire Deluxe Room
                </WhatsAppLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={standardRoom}
                alt="Standard room at Alpine Crest Homestay near Shimla"
                width={1360}
                height={1020}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Standard Room</h3>
                  <span className="text-sm font-bold text-moss">₹2,300 / night</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Comfortable double bed, attached modern washroom, hot water. Includes breakfast &amp; dinner.
                </p>
                <WhatsAppLink message={WA.standard} variant="primary" className="mt-4 px-5 py-2.5 w-full justify-center">
                  Enquire Standard Room
                </WhatsAppLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Explore Day Trips */}
      <section className="bg-secondary/60 py-16">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Explore from here" title="Day Trips Around Kathot &amp; Theog" />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Shimla (38 km)", to: "/places-to-visit/shimla" },
              { name: "Kufri (22 km)", to: "/homestay-near-kufri" },
              { name: "Theog (6 km)", to: "/homestay-in-theog" },
              { name: "Fagu (16 km)", to: "/homestay-in-kathot" },
              { name: "Narkanda (45 km)", to: "/mountain-view-homestay-theog" },
              { name: "Chail (45 km)", to: "/homestay-at-chail" },
            ].map((d) => (
              <Link
                key={d.name}
                to={d.to}
                className="rounded-xl border border-border bg-card p-5 shadow-soft transition-colors hover:bg-secondary"
              >
                <MapPin className="h-5 w-5 text-moss" aria-hidden="true" />
                <p className="mt-3 font-display text-xl">{d.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-2xl bg-primary px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-display">Book Your Peaceful Stay Near Shimla Today</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Book direct with host Sahil Verma for verified low-rate guarantee, zero booking fees, and custom taxi pickup from Shimla.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <WhatsAppLink message={WA.location} variant="primary">
              Check Availability via WhatsApp
            </WhatsAppLink>
            <CallLink variant="outline" className="border-sand/50 text-sand hover:bg-sand/15">
              Call Host Now
            </CallLink>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-sand/50 px-6 py-3 text-sm font-semibold text-sand hover:bg-sand/15"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
