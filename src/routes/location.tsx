import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Navigation,
  Clock,
  ShieldCheck,
  Car,
  Compass,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { pageMeta, SITE, WA } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { MapEmbed } from "@/components/site/MapEmbed";
import { VERIFIED_DISTANCES } from "@/lib/distances";

export const Route = createFileRoute("/location")({
  head: () =>
    pageMeta({
      title: "Location & Verified Distances | Alpine Crest Homestay Theog",
      description:
        "Alpine Crest Homestay is located in Village Kathot, Theog (Himachal Pradesh). Verified distances to Theog (6 km), Fagu (16 km), Kufri (22 km), and Shimla (38 km).",
      path: "/location",
    }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Location & Distances" }]} />

      <section className="container-page py-10">
        <span className="eyebrow flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-moss" /> 100% Verified Location & Distances
        </span>
        <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl font-display">
          Location &amp; Road Access Guide
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Alpine Crest Homestay is situated in <strong>Village Kathot, PO, Majhar Road, Theog (HP 171012)</strong> — a serene apple orchard slope just 200m off National Highway 5 (NH-5).
        </p>
      </section>

      {/* Quick Location Specs Grid */}
      <section className="container-page pb-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Google Maps Directions */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-hover transition-all">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Navigation className="h-5 w-5" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground">Google Maps GPS</h2>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Exact pinned location on Google Maps. Set your GPS navigation directly to <strong>"Alpine Crest Homestay, Kathot"</strong> for smooth step-by-step turn guidance.
            </p>
            <a
              href={SITE.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
            >
              Open Google Maps Directions <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Nearest Landmark */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-hover transition-all">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Compass className="h-5 w-5" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground">Nearest Landmark</h2>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong>Kathot Junction & Bus Stop on NH-5</strong> (~200 metres away). Turn onto Majhar Road at Kathot bend. The homestay is clearly visible on the orchard slope.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-moss font-semibold">
              <CheckCircle2 className="h-3.5 w-3.5" /> 2 mins off NH-5 highway
            </div>
          </div>

          {/* Last Road Stretch */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-hover transition-all">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <AlertCircle className="h-5 w-5" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground">Last Road Stretch</h2>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Fully tarred, smooth motorable road right up to the gate. Suitable for all types of vehicles (hatchbacks, sedans &amp; SUVs). No dirt trail or steep unpaved climb.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-moss font-semibold">
              <CheckCircle2 className="h-3.5 w-3.5" /> 100% Motorable Paved Road
            </div>
          </div>

          {/* Free On-Site Parking */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-hover transition-all">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Car className="h-5 w-5" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground">Private On-Site Parking</h2>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Spacious, paved, secure private parking space inside the property premises. Free for all staying guests with ample turning room for multiple vehicles.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-moss font-semibold">
              <CheckCircle2 className="h-3.5 w-3.5" /> Free &amp; Secure Inside Gate
            </div>
          </div>

          {/* Taxi Assistance */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-hover transition-all">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <PhoneCall className="h-5 w-5" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground">Taxi &amp; Pickup Assistance</h2>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Host Sahil Verma assists with verified local taxi arrangements for pickup from Shimla ISBT, Shimla Railway Station, Kalka, or local sightseeing tours.
            </p>
            <WhatsAppLink message={WA.taxi} className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
              Request Taxi Assistance via WhatsApp →
            </WhatsAppLink>
          </div>

          {/* Address & Coordinates */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-hover transition-all">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground">GPS Coordinates</h2>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong>Lat:</strong> {SITE.latitude}, <strong>Long:</strong> {SITE.longitude}<br />
              {SITE.addressFull}
            </p>
            <p className="mt-4 text-xs font-semibold text-foreground">
              Phone: <a href={`tel:${SITE.phoneRaw}`} className="text-primary hover:underline">{SITE.phoneDisplay}</a>
            </p>
          </div>
        </div>
      </section>

      {/* Single Source of Truth - Verified Distances Table */}
      <section className="container-page pb-16">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <div className="border-b border-border bg-secondary/50 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-display text-foreground flex items-center gap-2">
                  <Navigation className="h-5 w-5 text-moss" /> Single Source of Truth: Verified Road Distances
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Official distances calculated from Village Kathot, Majhar Road, Theog gate
                </p>
              </div>
              <span className="rounded-full bg-moss/10 px-3 py-1 text-xs font-bold text-moss">
                Verified Mileage
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/20 text-xs font-semibold uppercase text-muted-foreground border-b border-border">
                <tr>
                  <th className="px-6 py-3.5">Destination</th>
                  <th className="px-6 py-3.5">Verified Distance</th>
                  <th className="px-6 py-3.5">Est. Driving Time</th>
                  <th className="px-6 py-3.5">Route Description &amp; Highway Access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {VERIFIED_DISTANCES.map((item) => (
                  <tr key={item.slug} className="hover:bg-secondary/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-foreground flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-moss shrink-0" />
                      {item.name}
                    </td>
                    <td className="px-6 py-4 font-bold text-moss">{item.distance}</td>
                    <td className="px-6 py-4 text-muted-foreground flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-moss shrink-0" />
                      {item.driveTime}
                    </td>
                    <td className="px-6 py-4 text-xs text-muted-foreground">{item.routeDescription}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Reach & Interactive Map Embed */}
      <section className="container-page grid gap-10 pb-16 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-display text-foreground">Detailed Travel Instructions</h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Follow these clear routes whether arriving by self-drive car, HRTC Volvo bus, or heritage toy train:
            </p>

            <ul className="mt-6 grid gap-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              <li className="rounded-xl border border-border bg-secondary/30 p-4">
                <strong className="text-foreground block mb-1">🚗 By Self-Drive / Personal Car:</strong>
                Take NH-5 east from Shimla towards Theog. Pass Fagu (16 km) and proceed to Kathot junction (~6 km before main Theog town). Turn onto Majhar Road. Alpine Crest Homestay is 200 metres up with secure private parking.
              </li>
              <li className="rounded-xl border border-border bg-secondary/30 p-4">
                <strong className="text-foreground block mb-1">🚌 By Bus (HRTC / Private):</strong>
                Regular buses run from Shimla ISBT towards Theog/Kinnaur. You can request a drop at <strong>Kathot Bus Stop</strong> on NH-5, or alight at Theog Bazaar (~6 km away) and take a 10-min local taxi.
              </li>
              <li className="rounded-xl border border-border bg-secondary/30 p-4">
                <strong className="text-foreground block mb-1">🚂 By Heritage Toy Train:</strong>
                Take the UNESCO toy train from Kalka to Shimla Railway Station. From Shimla station, the homestay is a scenic 1 hr 15 mins drive (~38 km). Host Sahil Verma can arrange direct cab pickup.
              </li>
              <li className="rounded-xl border border-border bg-secondary/30 p-4">
                <strong className="text-foreground block mb-1">✈️ By Air:</strong>
                Jubbarhatti Airport (Shimla) is ~55 km (~1.5 to 2 hrs drive). Chandigarh International Airport is ~150 km (~4.5 hrs drive via Himalayan Expressway).
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6">
            <WhatsAppLink message={WA.taxi} className="rounded-full bg-emerald-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-emerald-700 transition-colors shadow-soft">
              Request Taxi Pickup from Host
            </WhatsAppLink>
            <a
              href={SITE.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-xs sm:text-sm font-semibold text-foreground transition-all hover:bg-secondary"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Open Google Maps GPS
            </a>
          </div>
        </div>

        <MapEmbed className="min-h-[450px] rounded-2xl border border-border shadow-soft" />
      </section>

      {/* Nearby Destination Links */}
      <section className="bg-secondary/60 py-16">
        <div className="container-page">
          <p className="eyebrow">Explore Upper Shimla</p>
          <h2 className="mt-3 text-3xl font-display">Destinations Around Kathot &amp; Theog</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VERIFIED_DISTANCES.map((item) => (
              <Link
                key={item.slug}
                to={`/places-to-visit/${item.slug}`}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <MapPin className="h-5 w-5 text-moss" aria-hidden="true" />
                  <span className="rounded-full bg-moss/10 px-2.5 py-0.5 text-xs font-bold text-moss">
                    {item.distance}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl text-foreground">{item.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {item.driveTime} from Homestay
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
