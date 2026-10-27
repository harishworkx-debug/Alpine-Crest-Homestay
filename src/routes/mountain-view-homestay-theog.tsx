import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Sunrise, Trees, Car, Wifi, UtensilsCrossed, Navigation, ShieldCheck, Clock, Tag } from "lucide-react";
import { WA, breadcrumbSchema, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CallLink } from "@/components/site/CallLink";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { MapEmbed } from "@/components/site/MapEmbed";
import { deluxeBalcony, standardRoom, exterior, sunset3, snowView } from "@/lib/images";
import { BookingForm } from "@/components/site/BookingForm";

export const Route = createFileRoute("/mountain-view-homestay-theog")({
  head: () => ({
    meta: [
      { title: "Mountain View Homestay in Theog, Himachal Pradesh | Alpine Crest" },
      {
        name: "description",
        content:
          "Book a mountain view homestay in Theog, Himachal Pradesh. Private sunrise balconies facing Shali Tibba range, deep deodar valley views, pine wood rooms & home-cooked food.",
      },
      { property: "og:title", content: "Mountain View Homestay in Theog, Himachal Pradesh | Alpine Crest" },
      {
        property: "og:description",
        content:
          "Mountain view homestay in Theog. Private balconies, golden sunrise over Shali Tibba, pine wood rooms, home-cooked food & peaceful orchard surroundings.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.alpinecresthomestay.com/mountain-view-homestay-theog/" },
    ],
    links: [{ rel: "canonical", href: "https://www.alpinecresthomestay.com/mountain-view-homestay-theog/" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Mountain View Homestay in Theog", path: "/mountain-view-homestay-theog" },
      ]),
    ],
  }),
  component: MountainViewHomestayTheogPage,
});

function MountainViewHomestayTheogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Mountain View Homestay in Theog" }]} />

      {/* Hero Section */}
      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow flex items-center gap-1.5">
            <Mountain className="h-4 w-4 text-moss" /> Himalayan Panorama &amp; Sunrise Balcony
          </span>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl font-display">
            Mountain View Homestay in Theog, Himachal Pradesh
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Experience unhindered 180° Himalayan valley views at <strong>Alpine Crest Homestay</strong> in Village Kathot, Theog. Situated on an elevated orchard slope, every balcony looks directly onto the majestic <strong>Shali Tibba mountain range</strong> and deep pine-forested valleys.
          </p>

          {/* Quick Feature Pills */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-secondary px-3 py-1 text-foreground flex items-center gap-1">
              <Sunrise className="h-3.5 w-3.5 text-moss" /> East-Facing Sunrise Balconies
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-foreground flex items-center gap-1">
              <Mountain className="h-3.5 w-3.5 text-moss" /> Shali Tibba Ridgeline Vistas
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-foreground flex items-center gap-1">
              <Tag className="h-3.5 w-3.5 text-moss" /> Rooms from ₹2,300 (Meals Included)
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-foreground flex items-center gap-1">
              <Car className="h-3.5 w-3.5 text-moss" /> Free Private Parking
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppLink message={WA.deluxe}>Book Mountain View Balcony Room</WhatsAppLink>
            <CallLink variant="outline">Call Host Sahil</CallLink>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
            >
              Explore View Rooms
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img
            src={deluxeBalcony}
            alt="Panoramic valley and mountain view from balcony at Alpine Crest Homestay in Theog"
            width={1360}
            height={1020}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Booking Form Banner */}
      <section className="container-page pb-12">
        <BookingForm />
      </section>

      {/* Main Content Article with exact H2 structure */}
      <section className="container-page grid gap-10 py-12 lg:grid-cols-2">
        <Reveal>
          <div className="prose-stay">
            <h2>Wake Up to Himalayan Mountain Views</h2>
            <p>
              At Alpine Crest Homestay, mornings are an experience in themselves. Positioned high above the highway in Village Kathot near Theog, our property catches the first golden rays of dawn breaking over distant snow-capped Himalayan peaks and deodar-covered ridges.
            </p>

            <h2>Private Balcony with Sunrise Views</h2>
            <p>
              Our Deluxe Rooms open directly onto private east-facing sit-out balconies. Step out with a hot cup of Himachali chai, settle into your wooden sit-out chair, and watch the morning light illuminate the valley below while crisp mountain air refreshes your soul.
            </p>

            <h2>Mountain View Rooms in Theog</h2>
            <p>
              Both our room categories are designed to keep you connected to the surrounding nature:
            </p>
            <ul>
              <li><strong>Deluxe Room with Private Balcony (₹2,800 / night):</strong> Features full pine wood panelling, a large window sit-out nook, and an exclusive balcony looking out over the mountain valley. Includes breakfast &amp; dinner.</li>
              <li><strong>Standard Room (₹2,300 / night):</strong> A cozy, wood-warmed double room with attached modern washroom and direct step-out access to the shared mountain view terrace and lawn. Includes breakfast &amp; dinner.</li>
            </ul>

            <h2>Shali Tibba &amp; Valley Views</h2>
            <p>
              The prominent peak towering across our valley is <strong>Shali Tibba</strong>. The unobstructed 180° panorama stretches across terraced apple orchards, pine forests, and rolling ridges, offering spectacular golden-hour light for photography lovers and nature enthusiasts alike.
            </p>

            <h2>Peaceful Stay Near Kufri and Shimla</h2>
            <p>
              While Shimla (38 km) and Kufri (22 km) are heavily frequented by day tourists, staying on our Kathot ridge gives you quiet, uncrowded mountain peace. You get all the scenic grandeur of Upper Shimla without commercial hotel noise, traffic congestion, or expensive parking fees.
            </p>

            <h2>Home-Cooked Himachali Food</h2>
            <p>
              Pair your mountain views with freshly cooked meals from our family kitchen. We serve hot stuffed parathas for breakfast and complete Himachali thalis (rajma, dal, rotis, rice) for dinner. Traditional local dishes like <strong>Siddu</strong> and <strong>Madra</strong> can be prepared on request.
            </p>

            <h2>How to Reach Alpine Crest</h2>
            <p>
              Alpine Crest Homestay is situated at <strong>Village Kathot, PO, Majhar Road, Theog (HP 171012)</strong> — just 200 metres off National Highway 5 (NH-5). Drive 6 km before main Theog town, turn onto Majhar Road, and park right inside our free paved private parking lot.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={sunset3}
                alt="Golden hour sunrise and mountain view from balcony at Alpine Crest Homestay in Theog"
                width={1360}
                height={1020}
                loading="lazy"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-moss">Private Sunrise Balcony</span>
                <h3 className="mt-1 text-xl font-display text-foreground">Deluxe Room with Balcony</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our largest room featuring pine wood panelling, sit-out balcony chairs, and 180° mountain valley views.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-bold text-foreground">₹2,800 <span className="text-xs font-normal text-muted-foreground">/ night (Breakfast &amp; Dinner included)</span></span>
                </div>
                <WhatsAppLink message={WA.deluxe} variant="primary" className="mt-4 w-full justify-center">
                  Book Deluxe Balcony Room
                </WhatsAppLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={snowView}
                alt="Himalayan mountain snow view in winter from Alpine Crest Homestay, Theog"
                width={1360}
                height={1020}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-moss">Winter Snow Panorama</span>
                <h3 className="mt-1 text-xl font-display text-foreground">Standard Room &amp; View Terrace</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Cozy double room with warm wooden interiors, attached washroom, and direct access to the mountain view terrace.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-bold text-foreground">₹2,300 <span className="text-xs font-normal text-muted-foreground">/ night (Breakfast &amp; Dinner included)</span></span>
                </div>
                <WhatsAppLink message={WA.standard} variant="primary" className="mt-4 w-full justify-center">
                  Book Standard Room
                </WhatsAppLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="bg-secondary/60 py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow flex items-center gap-1.5">
              <Navigation className="h-4 w-4 text-moss" /> Directions &amp; Location
            </span>
            <h2 className="mt-3 text-3xl font-display text-foreground">How to Reach Alpine Crest</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Alpine Crest Homestay is located at <strong>{SITE.addressFull}</strong>. When travelling on NH-5 towards Theog, turn onto Majhar Road at Kathot. The homestay is 200m up on the orchard slope.
            </p>
            <ul className="mt-6 grid gap-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-moss shrink-0" /> Free private parking inside gates
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-moss shrink-0" /> Direct host phone &amp; WhatsApp guidance
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-moss shrink-0" /> Taxi arrangements from Shimla ISBT or station
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-pine"
              >
                <MapPin className="h-4 w-4" /> Open in Google Maps
              </a>
              <WhatsAppLink message={WA.location} variant="outline">
                Ask Host for Directions
              </WhatsAppLink>
            </div>
          </div>
          <MapEmbed className="min-h-[350px] rounded-2xl border border-border shadow-soft" />
        </div>
      </section>

      {/* Book Your Mountain View Stay Callout Banner */}
      <section className="container-page py-16">
        <div className="rounded-2xl bg-primary px-8 py-12 text-center text-primary-foreground shadow-lift">
          <h2 className="text-3xl font-display">Book Your Mountain View Stay</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Experience morning golden sunrises over Shali Tibba, private balcony relaxation, and delicious home-cooked Himachali meals. Check availability now!
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <WhatsAppLink message={WA.deluxe} variant="primary">
              Check Availability via WhatsApp
            </WhatsAppLink>
            <CallLink variant="outline" className="border-sand/50 text-sand hover:bg-sand/15">
              Call Host Sahil
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
