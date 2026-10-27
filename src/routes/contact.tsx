import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Navigation, MessageCircle, ShieldCheck, Clock, CheckCircle2, UserCheck } from "lucide-react";
import { pageMeta, SITE, WA } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { MapEmbed } from "@/components/site/MapEmbed";
import { BookingForm } from "@/components/site/BookingForm";
import { TrustSignals } from "@/components/site/TrustSignals";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta({
      title: "Book Direct & Contact | Alpine Crest Homestay Theog",
      description:
        "Check room availability and book direct with host Sahil Verma at Alpine Crest Homestay, Village Kathot near Theog. Zero booking fees, instant WhatsApp confirmation & low rates.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Book Direct & Contact" }]} />

      <section className="container-page py-10">
        <span className="eyebrow flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-moss" /> Direct Host Booking &amp; Instant Enquiry
        </span>
        <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl font-display">
          Check Availability &amp; Reserve Your Stay
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Book directly with host <strong>Sahil Verma</strong> for guaranteed lowest rates, zero booking fees, and personal assistance. Select your dates below to send a pre-filled enquiry straight to our WhatsApp.
        </p>
      </section>

      {/* Main Mini-Booking Form Section at the top */}
      <section className="container-page pb-12">
        <BookingForm className="border-2 border-primary/20 bg-card shadow-lift" />
      </section>

      {/* Quick WhatsApp Intent Action Cards */}
      <section className="container-page pb-16">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-display text-foreground">Specific WhatsApp Enquiries</h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Click any options below to open a tailored WhatsApp chat for immediate answers:
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-moss bg-moss/10 px-3 py-1.5 rounded-full shrink-0">
              <Clock className="h-3.5 w-3.5" /> Typical response: ~10 minutes
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-background p-4 hover:border-primary/50 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-moss bg-moss/10 px-2 py-0.5 rounded">
                  General Stay
                </span>
                <h3 className="mt-2 text-sm font-bold text-foreground">General Room Availability</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Check dates and total room capacity across all 6 double rooms.
                </p>
              </div>
              <WhatsAppLink message={WA.general} className="mt-4 w-full justify-center text-xs">
                <MessageCircle className="h-3.5 w-3.5" /> Check Availability
              </WhatsAppLink>
            </div>

            <div className="rounded-xl border border-border bg-background p-4 hover:border-primary/50 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-moss bg-moss/10 px-2 py-0.5 rounded">
                  ₹2,300 / night
                </span>
                <h3 className="mt-2 text-sm font-bold text-foreground">Standard Room Enquiry</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Cozy non-balcony double room with attached modern washroom.
                </p>
              </div>
              <WhatsAppLink message={WA.standard} className="mt-4 w-full justify-center text-xs">
                <MessageCircle className="h-3.5 w-3.5" /> Standard Room Info
              </WhatsAppLink>
            </div>

            <div className="rounded-xl border border-border bg-background p-4 hover:border-primary/50 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-moss bg-moss/10 px-2 py-0.5 rounded">
                  ₹2,800 / night
                </span>
                <h3 className="mt-2 text-sm font-bold text-foreground">Deluxe Room with Balcony</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Full pine wood panelling &amp; private sunrise balcony overlooking valley.
                </p>
              </div>
              <WhatsAppLink message={WA.deluxe} className="mt-4 w-full justify-center text-xs">
                <MessageCircle className="h-3.5 w-3.5" /> Deluxe Room Info
              </WhatsAppLink>
            </div>

            <div className="rounded-xl border border-border bg-background p-4 hover:border-primary/50 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-moss bg-moss/10 px-2 py-0.5 rounded">
                  Dining Policy
                </span>
                <h3 className="mt-2 text-sm font-bold text-foreground">Home-Cooked Meals</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Ask about breakfast &amp; dinner menu options (Siddu, Rajma, Madra).
                </p>
              </div>
              <WhatsAppLink message={WA.meals} className="mt-4 w-full justify-center text-xs">
                <MessageCircle className="h-3.5 w-3.5" /> Meal Questions
              </WhatsAppLink>
            </div>

            <div className="rounded-xl border border-border bg-background p-4 hover:border-primary/50 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-moss bg-moss/10 px-2 py-0.5 rounded">
                  Transport
                </span>
                <h3 className="mt-2 text-sm font-bold text-foreground">Taxi &amp; Sightseeing</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Arrange station pickup from Shimla ISBT or local day tours to Kufri &amp; Narkanda.
                </p>
              </div>
              <WhatsAppLink message={WA.taxi} className="mt-4 w-full justify-center text-xs">
                <MessageCircle className="h-3.5 w-3.5" /> Taxi Assistance
              </WhatsAppLink>
            </div>

            <div className="rounded-xl border border-border bg-background p-4 hover:border-primary/50 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-moss bg-moss/10 px-2 py-0.5 rounded">
                  Direct Host
                </span>
                <h3 className="mt-2 text-sm font-bold text-foreground">Call Host Sahil Verma</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Prefer a quick phone conversation? Call us directly anytime between 8 AM – 10 PM.
                </p>
              </div>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-moss" /> Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Deposit Guarantees */}
      <section className="container-page pb-16">
        <TrustSignals />
      </section>

      {/* Contact Info & Interactive Map */}
      <section className="container-page grid gap-10 pb-20 lg:grid-cols-2">
        <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft">
          <div>
            <div className="flex items-center gap-2 text-moss font-semibold text-xs uppercase tracking-wider">
              <UserCheck className="h-4 w-4" /> Family-Run Property
            </div>
            <h2 className="mt-2 text-2xl font-display text-foreground">Alpine Crest Homestay Location</h2>
            <p className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              <span>{SITE.addressFull}</span>
            </p>
            <p className="mt-3 flex items-center gap-2.5 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              <span>Host Contact: </span>
              <a href={`tel:${SITE.phoneRaw}`} className="font-semibold text-foreground hover:text-primary">
                {SITE.phoneDisplay}
              </a>
            </p>
            <div className="mt-6 space-y-2 text-xs text-muted-foreground border-t border-border pt-4">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-moss" /> Check-in: 12:00 PM | Check-out: 11:00 AM
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-moss" /> Nearest Highway: NH-5 (200m away at Kathot Junction)
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-moss" /> Free Private Parking inside property gates
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-4">
            <a
              href={SITE.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-xs sm:text-sm font-semibold text-foreground transition-all hover:bg-secondary"
            >
              <Navigation className="h-4 w-4 text-moss" aria-hidden="true" />
              Get Google Maps Directions
            </a>
          </div>
        </div>

        <MapEmbed className="min-h-[420px] rounded-2xl border border-border shadow-soft" />
      </section>
    </>
  );
}
