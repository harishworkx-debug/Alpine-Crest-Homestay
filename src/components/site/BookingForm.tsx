import { useState } from "react";
import { Calendar, Users, Home, User, CheckCircle2, ShieldCheck, CreditCard } from "lucide-react";
import { waLink } from "@/lib/site";

export function BookingForm({ className = "" }: { className?: string }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("Deluxe Room (With Balcony)");
  const [name, setName] = useState("");

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const dates = checkIn && checkOut ? `${checkIn} to ${checkOut}` : "my upcoming travel dates";
    let message = `Hello, I want to check availability at Alpine Crest Homestay for ${dates} for ${guests} guest(s). I am interested in the ${roomType}.`;
    if (name.trim()) {
      message += ` (Name: ${name.trim()})`;
    }

    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`rounded-2xl border border-border bg-card p-6 shadow-lift ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4 mb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-moss bg-moss/10 px-2.5 py-1 rounded-full">
            <ShieldCheck className="h-3.5 w-3.5" /> Book Direct &amp; Save (No Agent Markup)
          </span>
          <h3 className="mt-2 text-xl sm:text-2xl font-display text-foreground">
            Check Availability for Your Dates
          </h3>
        </div>
        <div className="text-right sm:text-right text-xs text-muted-foreground">
          <p className="font-semibold text-foreground">Zero Booking Fees</p>
          <p>Instant Direct Host Response</p>
        </div>
      </div>

      <form onSubmit={handleWhatsAppBooking} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {/* Check-in */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
            <Calendar className="h-3.5 w-3.5 text-moss" /> Check-in Date
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Select date"
          />
        </div>

        {/* Check-out */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
            <Calendar className="h-3.5 w-3.5 text-moss" /> Check-out Date
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Select date"
          />
        </div>

        {/* Room Preference */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
            <Home className="h-3.5 w-3.5 text-moss" /> Room Preference
          </label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="Deluxe Room (With Balcony) — ₹2,800/night">
              Deluxe Balcony (₹2,800/night)
            </option>
            <option value="Standard Room — ₹2,300/night">
              Standard Room (₹2,300/night)
            </option>
            <option value="Any Available Room">Any Available Room</option>
          </select>
        </div>

        {/* Guests */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
            <Users className="h-3.5 w-3.5 text-moss" /> Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4+">4+ Guests (Family)</option>
          </select>
        </div>

        {/* Action Button */}
        <div className="sm:col-span-2 lg:col-span-1 flex items-end">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-[#20bd5a] hover:shadow-lift"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Enquire on WhatsApp
          </button>
        </div>
      </form>

      {/* Trust Micro-Badges */}
      <div className="mt-4 pt-3 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="h-3.5 w-3.5 text-moss" /> Includes Breakfast & Dinner
        </span>
        <span className="flex items-center gap-1">
          <CreditCard className="h-3.5 w-3.5 text-moss" /> Pay via UPI / GPay / Cash
        </span>
        <span className="flex items-center gap-1">
          <ShieldCheck className="h-3.5 w-3.5 text-moss" /> Free Private Parking
        </span>
      </div>
    </div>
  );
}
