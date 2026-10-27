import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Car, Wifi, UtensilsCrossed, HelpCircle, Navigation, ShieldCheck, Clock, Tag } from "lucide-react";
import { WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CallLink } from "@/components/site/CallLink";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { deluxeRoom, deluxeBalcony, standardRoom } from "@/lib/images";
import { BookingForm } from "@/components/site/BookingForm";

export const Route = createFileRoute("/homestay-near-kufri")({
  head: () => ({
    meta: [
      { title: "Best Homestay Near Kufri (22 km) | Mountain Stay in Theog" },
      {
        name: "description",
        content:
          "Looking for a peaceful homestay near Kufri? Alpine Crest Homestay in Kathot near Theog is 22 km (35 mins) from Kufri. Rooms from ₹2,300 with balcony views, free parking & home-cooked meals.",
      },
      { property: "og:title", content: "Best Homestay Near Kufri (22 km) | Mountain Stay in Theog" },
      {
        property: "og:description",
        content:
          "Peaceful homestay 22 km (35 mins) from Kufri. Mountain views, private balconies, free parking, home-cooked food.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.alpinecresthomestay.com/homestay-near-kufri/" },
    ],
    links: [{ rel: "canonical", href: "https://www.alpinecresthomestay.com/homestay-near-kufri/" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Homestay Near Kufri", path: "/homestay-near-kufri" },
      ]),
    ],
  }),
  component: HomestayAtKufriPage,
});

function HomestayAtKufriPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Homestay Near Kufri" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-moss" /> Honest &amp; Verified Information
          </span>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl font-display">
            Peaceful Homestay Near Kufri (22 km / 35 Mins Drive)
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Looking for a peaceful homestay near Kufri? <strong>Alpine Crest Homestay</strong> is located in Village Kathot near Theog — exactly <strong>22 km (approx 35–45 minutes drive)</strong> from Kufri on NH-5. It is a serene, uncrowded alternative to staying inside Kufri's commercial tourist zone.
          </p>

          {/* Quick Fact Pills */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-secondary px-3 py-1 text-foreground flex items-center gap-1">
              <Navigation className="h-3.5 w-3.5 text-moss" /> 22 km from Kufri
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-foreground flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-moss" /> 35–45 mins drive
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
            src={deluxeBalcony}
            alt="Mountain view from Alpine Crest Homestay near Kufri, Himachal Pradesh"
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

      {/* Main Content & FAQ Breakdown for Kufri Searchers */}
      <section className="container-page grid gap-10 py-12 lg:grid-cols-2">
        <Reveal>
          <div className="prose-stay">
            <h2>Why Stay Near Theog Instead of Inside Kufri?</h2>
            <p>
              Kufri is one of the most famous stops in Himachal Pradesh for winter snow, horse rides, and the Himalayan Nature Park. However, during peak summer months and winter weekends, Kufri becomes heavily congested with tourist vehicles, commercial noise, and long traffic jams.
            </p>
            <p>
              Staying at Alpine Crest Homestay in Village Kathot (near Theog) gives you the best of both worlds: you get pristine pine air, wide sunrise valley views, silence, authentic home hospitality, and private parking — all while staying just 35 minutes down the NH-5 highway from Kufri.
            </p>

            <h2>Quick Answers for Kufri Visitors</h2>

            <div className="not-prose mt-6 grid gap-4">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Navigation className="h-4 w-4 text-moss shrink-0" />
                  How far is Alpine Crest from Kufri?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Alpine Crest Homestay is exactly <strong>22 km east of Kufri</strong> along National Highway 5 (NH-5), located at Village Kathot, near Theog.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4 text-moss shrink-0" />
                  How long does the drive take?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  The drive takes approximately <strong>35 to 45 minutes</strong> by personal car or local taxi along smooth, wide asphalt road.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Car className="h-4 w-4 text-moss shrink-0" />
                  Can I visit Kufri by local taxi?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Yes! Host <strong>Sahil Verma</strong> arranges verified local taxis for day trips to Kufri (Himalayan Nature Park, Mahasu Peak, snow points) and return.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Check className="h-4 w-4 text-moss shrink-0" />
                  Is free private parking available?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Yes! We have spacious, paved private parking directly inside property gates, completely free for staying guests. Suitable for SUVs, sedans, and hatchbacks.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Tag className="h-4 w-4 text-moss shrink-0" />
                  How much does a room cost?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  • <strong>Standard Room</strong>: ₹2,300 / night (includes breakfast &amp; dinner)<br />
                  • <strong>Deluxe Room with Balcony</strong>: ₹2,800 / night (includes breakfast &amp; dinner)<br />
                  No hidden service charges or agent markups when booking direct!
                </p>
              </div>
            </div>

            <h2 className="mt-8">Things to Do Around Kufri During Your Stay</h2>
            <ul>
              <li><strong>Himalayan Nature Park:</strong> Walk through serene cedar forest trails and spot Himalayan pheasants, monals, and brown bears.</li>
              <li><strong>Mahasu Peak:</strong> The highest ridge point in Kufri offering panoramic snow-range views.</li>
              <li><strong>Winter Snow Play:</strong> Enjoy tobogganing and snow fun during peak winter months (Jan–Feb).</li>
              <li><strong>Fagu Apple Orchards:</strong> Visit quiet orchard viewpoints just 16 km from the homestay.</li>
            </ul>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={deluxeRoom}
                alt="Deluxe room at Alpine Crest Homestay, a short drive from Kufri"
                width={1360}
                height={1020}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Deluxe Room (With Balcony)</h3>
                  <span className="text-sm font-bold text-moss">₹2,800 / night</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Full pine wood panelling, sit-out nook &amp; private sunrise balcony overlooking valley. Includes breakfast &amp; dinner.
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
                alt="Standard room at Alpine Crest Homestay near Kufri"
                width={1360}
                height={1020}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Standard Room</h3>
                  <span className="text-sm font-bold text-moss">₹2,300 / night</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Comfortable double bed, warm pine accents, attached modern bathroom. Includes breakfast &amp; dinner.
                </p>
                <WhatsAppLink message={WA.standard} variant="primary" className="mt-4 px-5 py-2.5 w-full justify-center">
                  Enquire Standard Room
                </WhatsAppLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Explore Nearby Destinations */}
      <section className="bg-secondary/60 py-16">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Explore" title="Destinations Around Kufri and Theog" />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Kufri (22 km)", to: "/places-to-visit/kufri" },
              { name: "Theog (6 km)", to: "/homestay-in-theog" },
              { name: "Fagu (16 km)", to: "/homestay-in-kathot" },
              { name: "Shimla (38 km)", to: "/homestay-near-shimla" },
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
          <h2 className="text-3xl font-display">Book Your Stay Near Kufri Today</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Book direct with host Sahil Verma for verified low-rate guarantee, zero booking fees, and custom taxi assistance.
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
