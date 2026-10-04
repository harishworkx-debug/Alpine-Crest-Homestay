import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, MapPin, Car, UtensilsCrossed, ShieldCheck, Sun, Compass, Coffee, Sparkles } from "lucide-react";
import { pageMeta, WA, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CallLink } from "@/components/site/CallLink";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { exterior, lounge, food, deluxeBalcony, standardRoom } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta({
      title: "About Alpine Crest Homestay | Family Homestay in Theog",
      description:
        "Meet your host Sahil Verma at Alpine Crest Homestay in Kathot, Theog. Learn about our story, home-cooked Himachali meals, sunrise balcony views, and genuine mountain hospitality.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About Us" }]} />

      {/* Hero Header */}
      <section className="container-page py-12">
        <span className="eyebrow flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-moss" /> Genuine Family Hospitality
        </span>
        <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl font-display">
          About Alpine Crest Homestay, Kathot (Theog)
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Alpine Crest Homestay is a peaceful family-run mountain home in Village Kathot, just off Majhar Road in Theog. Built by our family on an orchard slope facing the Shali Tibba range, we offer a calm retreat away from commercial tourist crowds.
        </p>
      </section>

      {/* Our Story */}
      <section className="container-page grid gap-10 pb-16 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img
            src={exterior}
            alt="Alpine Crest Homestay building and apple orchards in Village Kathot, Theog"
            width={1360}
            height={1020}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-moss">Built With Love</span>
          <h2 className="mt-2 text-3xl font-display">Our Story</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We built this house in Village Kathot with a simple vision: to keep a mountain home the way it ought to be — warm, honest, and unhurried. There are no corporate rules, no sterile reception desks, and no artificial hotel routines.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We have just 6 guest double rooms (3 Standard and 3 Deluxe Rooms with private balconies), allowing us to offer personal care to every guest who walks through our doors.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
              <MapPin className="h-5 w-5 text-moss" aria-hidden="true" />
              <p className="mt-2 text-sm font-semibold">Kathot Village</p>
              <p className="text-xs text-muted-foreground">Peaceful apple orchards</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
              <Car className="h-5 w-5 text-moss" aria-hidden="true" />
              <p className="mt-2 text-sm font-semibold">Private Parking</p>
              <p className="text-xs text-muted-foreground">Direct road access</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
              <UtensilsCrossed className="h-5 w-5 text-moss" aria-hidden="true" />
              <p className="mt-2 text-sm font-semibold">Home Food</p>
              <p className="text-xs text-muted-foreground">Breakfast &amp; Dinner</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Your Host */}
      <section className="bg-secondary/60 py-16 border-y border-border">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-moss">Personal Care</span>
            <h2 className="mt-2 text-3xl font-display">About Your Host — Sahil Verma</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Sahil looks after the day-to-day management and guest experience at Alpine Crest Homestay. Known among guests for his warm, attentive, and stress-free hosting, Sahil ensures you feel right at home from the moment you arrive.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether you need directions along NH-5, guidance on hidden sunrise viewpoints in Theog, local taxi arrangements for Kufri or Shimla, or advice on nearby adventure trails — Sahil is always happy to assist.
            </p>
            <ul className="mt-6 grid gap-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-moss shrink-0" /> Attentive, friendly &amp; welcoming host care
              </li>
              <li className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-moss shrink-0" /> Insider local travel guidance for Kufri, Fagu &amp; Narkanda
              </li>
              <li className="flex items-center gap-2">
                <Car className="h-4 w-4 text-moss shrink-0" /> On-demand local taxi booking &amp; airport/railway transfer help
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppLink message={WA.general}>Chat with Sahil on WhatsApp</WhatsAppLink>
              <CallLink variant="outline">Call Host Now</CallLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img
              src={lounge}
              alt="Shared family lounge and sitting area at Alpine Crest Homestay"
              width={765}
              height={1020}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* What Makes Alpine Crest Different */}
      <section className="container-page py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">The Homestay Difference</span>
          <h2 className="mt-2 text-3xl font-display">What Makes Alpine Crest Special</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <Sun className="h-6 w-6 text-moss mb-3" />
            <h3 className="text-lg font-display text-foreground">East-Facing Balconies</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              East-facing rooms catch the very first morning light over the Shali Tibba peaks and deodar valley.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <Coffee className="h-6 w-6 text-moss mb-3" />
            <h3 className="text-lg font-display text-foreground">Fresh Home-Cooked Food</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Meals prepared in the family kitchen with fresh local ingredients. Traditional Siddu &amp; Madra served on request.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <Sparkles className="h-6 w-6 text-moss mb-3" />
            <h3 className="text-lg font-display text-foreground">Cleanliness &amp; Comfort</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Modern spotless attached washrooms, 24/7 hot water, high-speed Wi-Fi, and cozy pine-wood interiors.
            </p>
          </div>
        </div>
      </section>

      {/* Hospitality & Food */}
      <section className="bg-secondary/40 py-16 border-t border-border">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img
              src={food}
              alt="Home-cooked Himachali thali served fresh at Alpine Crest Homestay"
              width={574}
              height={1020}
              loading="lazy"
              className="h-full max-h-[460px] w-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-moss">Homely Flavours</span>
            <h2 className="mt-2 text-3xl font-display">Our Hospitality &amp; Food</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Food is an integral part of the experience at Alpine Crest. Breakfast and Dinner are included with both room options so you never have to worry about finding dining spots after a day of sightseeing.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Enjoy hot stuffed parathas, eggs, and freshly brewed chai for breakfast. Dinner features wholesome home-style meals — rajma-chawal, dal, rotis, and seasonal vegetables — with regional Himachali delicacies like Siddu and Madra prepared upon request.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <WhatsAppLink message={WA.meals}>Inquire About Meals</WhatsAppLink>
              <Link
                to="/rooms"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
              >
                View Rooms &amp; Rates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real Reviews Section */}
      <ReviewsSection />
    </>
  );
}
