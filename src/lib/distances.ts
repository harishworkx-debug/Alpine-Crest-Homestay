export type LocationDistance = {
  slug: string;
  name: string;
  distance: string;
  driveTime: string;
  routeDescription: string;
};

export const VERIFIED_DISTANCES: LocationDistance[] = [
  {
    slug: "theog",
    name: "Theog Town Center",
    distance: "6 km",
    driveTime: "12–15 mins drive",
    routeDescription: "Via Majhar Road to NH-5 Theog bazaar",
  },
  {
    slug: "fagu",
    name: "Fagu Viewpoints",
    distance: "16 km",
    driveTime: "25–30 mins drive",
    routeDescription: "Scenic highway drive along NH-5 toward Kufri",
  },
  {
    slug: "kufri",
    name: "Kufri (Nature Park & Mahasu)",
    distance: "22 km",
    driveTime: "35–40 mins drive",
    routeDescription: "Via NH-5 past Fagu",
  },
  {
    slug: "shimla",
    name: "Shimla Mall Road & Ridge",
    distance: "38 km",
    driveTime: "1 hr 15 mins drive",
    routeDescription: "Via NH-5 past Kufri & Dhalli",
  },
  {
    slug: "narkanda",
    name: "Narkanda & Hatu Peak",
    distance: "45 km",
    driveTime: "1 hr 30 mins drive",
    routeDescription: "Via NH-5 past Matiana",
  },
  {
    slug: "chail",
    name: "Chail Sanctuary & Palace",
    distance: "45 km",
    driveTime: "1 hr 30 mins drive",
    routeDescription: "Via Kufri-Chail road",
  },
];

export function getDistanceInfo(slug: string): LocationDistance | undefined {
  return VERIFIED_DISTANCES.find((d) => d.slug === slug);
}
