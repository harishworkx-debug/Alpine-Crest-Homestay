import { useState } from "react";
import { Star, CheckCircle, MessageSquareQuote, ThumbsUp, ShieldCheck } from "lucide-react";
import { REAL_REVIEWS, ReviewItem } from "@/lib/reviewsData";
import { Reveal } from "@/components/site/Reveal";

export function ReviewsSection() {
  const [filter, setFilter] = useState<string>("All");

  const filterOptions = ["All", "Family", "Couple", "Friends", "Solo"];

  const filteredReviews = filter === "All"
    ? REAL_REVIEWS
    : REAL_REVIEWS.filter((r) => r.travelGroup === filter);

  return (
    <section className="py-20 bg-secondary/40 border-y border-border" id="reviews">
      <div className="container-page">
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow flex items-center justify-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-moss" /> Real Guest Reviews on Google
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
              What Guests Say About Their Stay
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Read authentic experiences shared by travelers who stayed at Alpine Crest Homestay in Kathot near Theog & Kufri.
            </p>
          </div>
        </Reveal>

        {/* Overall Google Score Banner */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-soft max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-amber-500/10 text-amber-500 font-display text-3xl font-bold">
              5.0
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-sm font-semibold text-foreground">
                5.0 out of 5 stars based on 20 Verified Google Reviews
              </p>
              <p className="text-xs text-muted-foreground">100% Positive Guest Feedback on Google Maps</p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/BmvDx9UcSdu7zsML8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-2.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary hover:shadow-soft"
          >
            <svg className="h-4 w-4 fill-current text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            Verify 20 Reviews on Google
          </a>
        </div>

        {/* Filter Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                filter === opt
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-card border border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {opt === "All" ? "All 20 Reviews" : `${opt} Stays`}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredReviews.map((review) => (
            <article
              key={review.id}
              className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-moss font-bold text-xs">
                      {review.avatarText}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm flex items-center gap-1.5">
                        {review.name}
                      </h3>
                      <p className="text-[0.72rem] text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-bold text-amber-500">
                    <Star className="h-3.5 w-3.5 fill-current" /> {review.rating}.0
                  </span>
                </div>

                {/* Badges */}
                <div className="mt-3 flex flex-wrap gap-1.5 text-[0.68rem]">
                  {review.travelGroup && (
                    <span className="rounded-md bg-secondary px-2 py-0.5 font-medium text-foreground">
                      {review.travelGroup}
                    </span>
                  )}
                  {review.tripType && (
                    <span className="rounded-md bg-secondary/80 px-2 py-0.5 text-muted-foreground">
                      {review.tripType}
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  "{review.text}"
                </p>

                {/* Highlights */}
                {review.highlights && review.highlights.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1">
                    {review.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1 rounded-full bg-moss/10 px-2.5 py-0.5 text-[0.68rem] font-medium text-moss"
                      >
                        <CheckCircle className="h-3 w-3" /> {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Owner Response */}
              {review.ownerResponse && (
                <div className="mt-5 pt-3 border-t border-border/60 bg-secondary/30 rounded-xl p-3 text-[0.72rem]">
                  <p className="font-semibold text-moss">Response from Alpine Crest Owner:</p>
                  <p className="mt-0.5 text-muted-foreground italic">"{review.ownerResponse}"</p>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* CTA to Google Maps */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/BmvDx9UcSdu7zsML8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-pine hover:shadow-lift"
          >
            <MessageSquareQuote className="h-4 w-4" />
            View All 20 Reviews on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
