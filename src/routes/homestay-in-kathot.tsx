import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Car, Wifi, UtensilsCrossed, Trees, Navigation, ShieldCheck, Clock, Tag, Sparkles } from "lucide-react";
import { WA, breadcrumbSchema, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CallLink } from "@/components/site/CallLink";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { MapEmbed } from "@/components/site/MapEmbed";
import { exterior, deluxeBalcony, standardRoom, lounge } from "@/lib/images";
import { BookingForm } from "@/components/site/BookingForm";

export const Route = createFileRoute("/homestay-in-kathot")({
  head: () => ({
    meta: [
      { title: "Homestay in Kathot, Theog | Mountain View Homestay in Kathot" },
      {
        name: "description",
        content:
          "Looking for a homestay in Kathot? Alpine Crest Homestay is a peaceful mountain view homestay in Kathot, near Theog. Apple orchards, private balconies, home-cooked Himachali food & free parking.",
      },
      { property: "og:title", content: "Homestay in Kathot, Theog | Mountain View Stay in Kathot" },
      {
        property: "og:description",
        content:
          "Stay in Kathot near Theog. Mountain view homestay surrounded by apple orchards with private balconies, free parking, and home-cooked meals.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.alpinecresthomestay.com/homestay-in-kathot/" },
    ],
    links: [{ rel: "canonical", href: "https://www.alpinecresthomestay.com/homestay-in-kathot/" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Homestay in Kathot", path: "/homestay-in-kathot" },
      ]),
    ],
  }),
  component: HomestayInKathotPage,
});

function HomestayInKathotPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Homestay in Kathot" }]} />

      {/* Hero Section */}
      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-moss" /> Village Kathot · PO Theog · Himachal Pradesh
          </span>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl font-display">
            Homestay in Kathot, Near Theog
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Looking for an authentic <strong>Homestay in Kathot</strong>? Alpine Crest Homestay is situated directly in <strong>Village Kathot</strong> on a tranquil orchard slope just off Majhar Road, 6 km from Theog. Enjoy a quiet <strong>mountain view homestay in Kathot</strong> with private balconies, terraced apple orchards, and genuine family hospitality.
          </p>

          {/* Quick Fact Pills */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-secondary px-3 py-1 text-foreground flex items-center gap-1">
              <Trees className="h-3.5 w-3.5 text-moss" /> Apple &amp; Plum Orchards
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-foreground flex items-center gap-1">
              <Mountain className="h-3.5 w-3.5 text-moss" /> Shali Tibba Sunrise Views
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-foreground flex items-center gap-1">
              <Tag className="h-3.5 w-3.5 text-moss" /> Rooms from ₹2,300 (Meals Included)
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-foreground flex items-center gap-1">
              <Car className="h-3.5 w-3.5 text-moss" /> Free Private Parking
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppLink message={WA.location}>Check Availability on WhatsApp</WhatsAppLink>
            <CallLink variant="outline">Call Host Sahil</CallLink>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
            >
              Explore Rooms
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img
            src={exterior}
            alt="Alpine Crest Homestay — Mountain view homestay in Kathot near Theog"
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

      {/* Detailed Narrative Flow Section: Kathot -> Location -> Property -> Rooms -> Orchard -> Mountain Views -> Food -> Parking -> Theog -> Kufri -> Booking */}
      <section className="container-page grid gap-10 py-12 lg:grid-cols-2">
        <Reveal>
          <div className="prose-stay">
            <h2>Welcome to Village Kathot</h2>
            <p>
              Kathot is a scenic, uncrowded mountain village located in PO Theog (171012), Himachal Pradesh. Nestled at a pleasant altitude in the upper Shimla hills, Kathot is cherished for its traditional Himachali culture, terraced apple &amp; plum orchards, and tranquil deodar ridgelines.
            </p>

            <h2>Location &amp; Easy Motorable Access</h2>
            <p>
              When travelling along National Highway 5 (NH-5), turn onto Majhar Road at the Kathot junction. The road leading to our doorstep is fully paved and motorable, suitable for all types of vehicles (hatchbacks, sedans, and SUVs). You are just 200 metres off the main highway, yet shielded from any traffic noise.
            </p>

            <h2>Alpine Crest: A Family-Run Property in Kathot</h2>
            <p>
              Alpine Crest Homestay is run directly by resident host <strong>Sahil Verma</strong> and his family. Unlike commercial hotels, staying in Kathot with us means personalized care — a warm welcome with fresh mountain tea, local itinerary guidance, and genuine Himachali warmth.
            </p>

            <h2>Comfortable Rooms &amp; Rates</h2>
            <p>
              Our property offers two carefully designed room options:
            </p>
            <ul>
              <li><strong>Standard Room (₹2,300 / night):</strong> Cozy double bed, pine wood accents, and modern attached washroom. Includes breakfast &amp; dinner.</li>
              <li><strong>Deluxe Room with Balcony (₹2,800 / night):</strong> Full pine panelling, window sit-out nook, and private east-facing balcony. Includes breakfast &amp; dinner.</li>
            </ul>

            <h2>Terraced Apple &amp; Plum Orchards</h2>
            <p>
              The homestay is built on a gentle orchard slope. Step outside onto the lawn or terrace and walk directly among apple and plum trees. In spring (April), the orchard bursts with white and pink blossoms; in autumn (Sep–Oct), red apples hang heavy on the branches.
            </p>

            <h2>Panoramic Mountain &amp; Sunrise Views</h2>
            <p>
              Because our property faces east across the Kathot valley, mornings begin with dramatic sunrise light spilling over the Shali Tibba peak and deodar ridgelines. Enjoy your morning tea on your private balcony as the golden sun illuminates the surrounding hills.
            </p>

            <h2>Fresh Home-Cooked Himachali Meals</h2>
            <p>
              Meals are prepared fresh daily in the family kitchen using local ingredients. Enjoy wholesome breakfasts (stuffed parathas, eggs, chai) and hearty dinners (rajma, dal, seasonal sabzi, rotis). Local Himachali dishes like <strong>Siddu</strong> and <strong>Madra</strong> are available upon request.
            </p>

            <h2>Free Private On-Site Parking</h2>
            <p>
              We provide wide, paved private parking space right inside property gates. Drive straight up to the house with zero steep unpaved climbing or luggage hauling. Parking is 100% free and secure for all staying guests.
            </p>

            <h2>Proximity to Theog &amp; Kufri</h2>
            <p>
              A stay in Kathot near Theog puts you in the ideal central location:
            </p>
            <ul>
              <li><strong>Theog Town &amp; Bazaar:</strong> Just ~6 km (10 mins drive) for local shops, dhabas, and state bus connectivity.</li>
              <li><strong>Kufri Nature Park &amp; Snow Ridge:</strong> ~22 km (35 mins drive) for Himalayan wildlife and snow activities.</li>
              <li><strong>Fagu Orchards:</strong> ~16 km (25 mins drive) for panoramic roadside valley views.</li>
            </ul>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={deluxeBalcony}
                alt="Deluxe balcony view over Kathot village valley at Alpine Crest Homestay"
                width={1360}
                height={1020}
                loading="lazy"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-moss">Mountain View Homestay in Kathot</span>
                <h3 className="mt-1 text-xl font-display text-foreground">Deluxe Room with Balcony</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our largest pine-panelled room with a private balcony overlooking the Kathot orchard valley.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-bold text-foreground">₹2,800 <span className="text-xs font-normal text-muted-foreground">/ night (Breakfast &amp; Dinner included)</span></span>
                </div>
                <WhatsAppLink message={WA.deluxe} variant="primary" className="mt-4 w-full justify-center">
                  Enquire Deluxe Room in Kathot
                </WhatsAppLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={lounge}
                alt="Shared family lounge at Alpine Crest Homestay in Village Kathot"
                width={1360}
                height={1020}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-moss">Stay in Kathot near Theog</span>
                <h3 className="mt-1 text-xl font-display text-foreground">Standard Room &amp; Shared Lounge</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Calm, wood-warmed room with double bed, attached washroom, and access to the shared family lounge.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-bold text-foreground">₹2,300 <span className="text-xs font-normal text-muted-foreground">/ night (Breakfast &amp; Dinner included)</span></span>
                </div>
                <WhatsAppLink message={WA.standard} variant="primary" className="mt-4 w-full justify-center">
                  Enquire Standard Room in Kathot
                </WhatsAppLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map Location Section */}
      <section className="bg-secondary/60 py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow flex items-center gap-1.5">
              <Navigation className="h-4 w-4 text-moss" /> How to Reach Kathot
            </span>
            <h2 className="mt-3 text-3xl font-display text-foreground">Location &amp; Directions to Kathot</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Alpine Crest Homestay is located at <strong>{SITE.addressFull}</strong>. When travelling on NH-5 towards Theog, turn onto Majhar Road at Kathot bend. The homestay is 200m up on the orchard slope.
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

      {/* Final Callout Banner */}
      <section className="container-page py-16">
        <div className="rounded-2xl bg-primary px-8 py-12 text-center text-primary-foreground shadow-lift">
          <h2 className="text-3xl font-display">Book Your Stay at Alpine Crest Homestay in Kathot</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Enjoy serene village living, sunrise balcony views, apple orchards, and authentic Himachali home hospitality near Theog.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <WhatsAppLink message={WA.location} variant="primary">
              Check Availability on WhatsApp
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
