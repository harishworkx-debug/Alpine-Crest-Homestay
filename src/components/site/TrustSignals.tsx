import { Star, ShieldCheck, CreditCard, Clock, MapPin, CheckCircle, HeartHandshake } from "lucide-react";

export function TrustSignals() {
  return (
    <section className="bg-card border-y border-border py-12">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow">Direct Booking Trust & Policy</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-display">
            Book With Confidence Directly From The Host
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            No middleman fees. Transparent policies and genuine Himachali hospitality.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Verified Google Reviews */}
          <div className="rounded-2xl border border-border bg-background p-5 shadow-soft">
            <div className="flex items-center gap-1 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-xs font-bold text-foreground">4.9 / 5.0</span>
            </div>
            <h3 className="text-base font-semibold text-foreground flex items-center gap-1.5">
              Verified Guest Ratings
            </h3>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              Highly rated on Google Maps for clean rooms, Himalayan views, home-cooked food & warm host care.
            </p>
          </div>

          {/* Cancellation Policy */}
          <div className="rounded-2xl border border-border bg-background p-5 shadow-soft">
            <Clock className="h-6 w-6 text-moss mb-2" />
            <h3 className="text-base font-semibold text-foreground">
              Flexible Cancellation
            </h3>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              Full refund on cancellation requested up to 48 hours prior to check-in date. Zero hidden penalties.
            </p>
          </div>

          {/* Payment Terms */}
          <div className="rounded-2xl border border-border bg-background p-5 shadow-soft">
            <CreditCard className="h-6 w-6 text-moss mb-2" />
            <h3 className="text-base font-semibold text-foreground">
              Easy Payment Options
            </h3>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              50% advance via UPI / Google Pay / PhonePe to confirm dates. Remaining balance paid at check-in.
            </p>
          </div>

          {/* Primary Base Location */}
          <div className="rounded-2xl border border-border bg-background p-5 shadow-soft">
            <MapPin className="h-6 w-6 text-moss mb-2" />
            <h3 className="text-base font-semibold text-foreground">
              Primary Location: Theog
            </h3>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              Peacefully situated in Village Kathot, Theog (6 km from town). Kufri (22 km) & Shimla (38 km) easily accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
