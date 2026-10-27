import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check,
  MapPin,
  Maximize2,
  Bed,
  Users,
  Mountain,
  ShowerHead,
  Flame,
  Wifi,
  UtensilsCrossed,
  Clock,
  ShieldCheck,
  PlusCircle,
  CalendarCheck
} from "lucide-react";
import { pageMeta, WA } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { standardRoom, deluxeBalcony } from "@/lib/images";

export const Route = createFileRoute("/rooms")({
  head: () =>
    pageMeta({
      title: "Rooms & Pricing | Alpine Crest Homestay — Mountain Rooms in Theog",
      description:
        "Detailed specifications, pricing and inclusions for 6 double rooms at Alpine Crest Homestay near Theog: Standard Room (₹2,300) & Deluxe Room with Private Balcony (₹2,800). Breakfast & dinner included.",
      path: "/rooms",
    }),
  component: RoomsPage,
});

type DetailedRoom = {
  id: "deluxe" | "standard";
  name: string;
  tagline: string;
  price: string;
  totalRooms: string;
  image: string;
  guests: string;
  maxOccupancy: string;
  roomSize: string;
  bedType: string;
  extraBed: string;
  view: string;
  bathroom: string;
  heating: string;
  wifi: string;
  foodInclusion: string;
  cancellation: string;
  checkInOut: string;
  description: string;
  message: string;
};

const DETAILED_ROOMS: DetailedRoom[] = [
  {
    id: "deluxe",
    name: "Deluxe Room (With Private Balcony)",
    tagline: "3 Rooms Available · Panoramic Valley & Sunrise View",
    price: "₹2,800 / night",
    totalRooms: "3 Rooms in Property Inventory",
    image: deluxeBalcony,
    guests: "2–3 Guests",
    maxOccupancy: "2 Adults + 1 Child (or 3 Adults max)",
    roomSize: "Approx 220 sq. ft.",
    bedType: "1 King-Size Bed (Pine Wood Frame)",
    extraBed: "Extra comfortable mattress available on request",
    view: "Private sunrise balcony with 180° Shali Tibba valley view",
    bathroom: "Attached modern washroom with 24/7 geyser hot water",
    heating: "Pine wood panelling, heavy winter quilts & heater on request",
    wifi: "Free High-Speed Wi-Fi",
    foodInclusion: "MAP Plan — Breakfast & Dinner Included",
    cancellation: "Full refund up to 48 hours prior to check-in",
    checkInOut: "Check-in 12:00 PM | Check-out 11:00 AM",
    description:
      "Our largest pine-panelled room with a private sit-out balcony that opens directly onto the deodar valley. Enjoy mornings watching the sun rise over the Shali Tibba range right from your bed.",
    message: WA.deluxe,
  },
  {
    id: "standard",
    name: "Standard Room",
    tagline: "3 Rooms Available · Cozy Wood-Warmed Comfort",
    price: "₹2,300 / night",
    totalRooms: "3 Rooms in Property Inventory",
    image: standardRoom,
    guests: "2 Guests",
    maxOccupancy: "2 Adults",
    roomSize: "Approx 180 sq. ft.",
    bedType: "1 Comfortable Double Bed",
    extraBed: "Extra floor mattress available on request",
    view: "Courtyard view with access to shared mountain terrace",
    bathroom: "Attached modern washroom with 24/7 geyser hot water",
    heating: "Cozy wood-warmed interiors, warm blankets & heater on request",
    wifi: "Free High-Speed Wi-Fi",
    foodInclusion: "MAP Plan — Breakfast & Dinner Included",
    cancellation: "Full refund up to 48 hours prior to check-in",
    checkInOut: "Check-in 12:00 PM | Check-out 11:00 AM",
    description:
      "A calm, cozy double room with warm wooden accents, soft lighting, and attached private bathroom. Includes full access to the shared family lounge, garden, and panoramic terrace.",
    message: WA.standard,
  },
];

function RoomsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Rooms & Pricing" }]} />

      {/* Header Banner */}
      <section className="container-page py-10">
        <span className="eyebrow flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-moss" /> Total Property Inventory: 6 Double Rooms
        </span>
        <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl font-display">
          Mountain Rooms with Honest Comfort
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Alpine Crest Homestay has 6 double rooms in total — 3 Deluxe Rooms with private sunrise balconies and 3 Standard Rooms. Every booking includes freshly prepared home-cooked breakfast and dinner.
        </p>
      </section>

      {/* Detailed Room Cards */}
      <section className="container-page grid gap-12 pb-20">
        {DETAILED_ROOMS.map((room) => (
          <article
            key={room.id}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-lift grid lg:grid-cols-12 gap-0"
          >
            {/* Left Image Column */}
            <div className="relative lg:col-span-5 h-72 sm:h-96 lg:h-full overflow-hidden">
              <img
                src={room.image}
                alt={`${room.name} at Alpine Crest Homestay, Theog`}
                width={1360}
                height={1020}
                loading="eager"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-4 left-4 rounded-full bg-primary/90 backdrop-blur px-3 py-1 text-xs font-bold text-primary-foreground shadow-soft">
                {room.totalRooms}
              </div>
            </div>

            {/* Right Specification Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Name & Pricing Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border pb-4 mb-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-display text-foreground">{room.name}</h2>
                    <p className="text-xs font-medium text-moss mt-0.5">{room.tagline}</p>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-2xl font-bold text-foreground">{room.price}</span>
                    <p className="text-[0.72rem] font-semibold text-moss">Breakfast &amp; Dinner Included</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                  {room.description}
                </p>

                {/* 11 Required Booking Fields Grid */}
                <div className="grid gap-3 sm:grid-cols-2 text-xs border-t border-border/60 pt-4 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Maximize2 className="h-4 w-4 text-moss shrink-0" />
                    <span><strong>Room Size:</strong> {room.roomSize}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Bed className="h-4 w-4 text-moss shrink-0" />
                    <span><strong>Bed Type:</strong> {room.bedType}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-moss shrink-0" />
                    <span><strong>Max Occupancy:</strong> {room.maxOccupancy}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <PlusCircle className="h-4 w-4 text-moss shrink-0" />
                    <span><strong>Extra Bed:</strong> {room.extraBed}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mountain className="h-4 w-4 text-moss shrink-0" />
                    <span><strong>View:</strong> {room.view}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ShowerHead className="h-4 w-4 text-moss shrink-0" />
                    <span><strong>Bathroom:</strong> {room.bathroom}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Flame className="h-4 w-4 text-moss shrink-0" />
                    <span><strong>Heating:</strong> {room.heating}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Wifi className="h-4 w-4 text-moss shrink-0" />
                    <span><strong>Wi-Fi:</strong> {room.wifi}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <UtensilsCrossed className="h-4 w-4 text-moss shrink-0" />
                    <span><strong>Meals:</strong> {room.foodInclusion}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-moss shrink-0" />
                    <span><strong>Cancellation:</strong> {room.cancellation}</span>
                  </div>
                </div>

                <div className="rounded-xl bg-secondary/50 p-3 text-xs flex items-center justify-between text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5 font-medium text-foreground">
                    <Clock className="h-3.5 w-3.5 text-moss" /> {room.checkInOut}
                  </span>
                  <span className="font-semibold text-moss">No Hidden Fees</span>
                </div>
              </div>

              {/* Booking CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <WhatsAppLink message={room.message} className="px-6 py-3">
                  Book {room.id === "deluxe" ? "Deluxe Balcony Room" : "Standard Room"} on WhatsApp
                </WhatsAppLink>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
                >
                  Contact Host
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Direct Booking Guarantees */}
      <section className="bg-secondary/60 py-16">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Direct Host Commitment</span>
            <h2 className="mt-2 text-3xl font-display text-foreground">Practical Details &amp; Policies</h2>
            <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                Check-in 12:00 PM, Check-out 11:00 AM (Early check-in subject to availability)
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                Fresh home-cooked Himachali meals (Breakfast &amp; Dinner) included with both room options
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                Free secure private parking on site with direct road access
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                Flexible 48-hour cancellation policy with 100% deposit refund
              </li>
            </ul>
            <WhatsAppLink message={WA.general} variant="primary" className="mt-7">
              Check Room Availability for Your Dates
            </WhatsAppLink>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 shrink-0 text-moss" aria-hidden="true" />
              <div>
                <p className="font-semibold text-foreground">Alpine Crest Homestay</p>
                <p className="text-xs text-muted-foreground">
                  Village Kathot, PO, Majhar Rd, Theog, Himachal Pradesh 171012
                </p>
              </div>
            </div>
            <div className="border-t border-border pt-4 text-xs text-muted-foreground">
              <p className="font-semibold text-foreground mb-1">Guaranteed Inventory Match:</p>
              <p>6 Double Rooms (3 Standard + 3 Deluxe Balcony). Aligned with official extranet records.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
