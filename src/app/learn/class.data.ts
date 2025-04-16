import { type Place, PLACES } from "@/data/places";
import type { Route } from "next";

export type DanceClass = {
  title: string;
  time: string;
  canRegister?: boolean;
  ageRange?: string;
  href: Route;
};

type ClassLocation = {
  dayOfWeek: string;
  location: Place;
  href?: Route;
  classes: DanceClass[];
};

const mondayWinter2025: ClassLocation = {
  href: "/learn/2025/winter/aldergrove-breaking-class",
  dayOfWeek: "Monday",
  location: PLACES.aldergrove,
  classes: [
    {
      title: "Intro to Breaking",
      time: "6:30 - 7:00 PM",
      canRegister: undefined,
      ageRange: "Ages 5+",
      href: "/learn/2025/winter/aldergrove-breaking-class#intro-to-breaking",
    },
    {
      title: "Beginner Youth Breaking",
      time: "7:00 - 8:00 PM",
      canRegister: false,
      ageRange: "Ages 8+",
      href:
        "/learn/2025/winter/aldergrove-breaking-class#beginner-youth-breaking",
    },
  ],
};

const tuesdayWinter2025: ClassLocation = {
  href: "/learn/2025/winter/brookview-breaking-class",
  dayOfWeek: "Tuesday",
  location: PLACES.brookview,
  classes: [
    {
      title: "Intro to Breaking",
      time: "5:30 - 6:00 PM",
      canRegister: undefined,
      ageRange: "Ages 10+",
      href: "/learn/2025/winter/brookview-breaking-class#intro-to-breaking",
    },
    {
      title: "Intermediate Youth Breaking",
      time: "6:00 - 7:00 PM",
      canRegister: false,
      ageRange: "Ages 10+",
      href:
        "/learn/2025/winter/brookview-breaking-class#intermediate-youth-breaking",
    },
  ],
};

const tuesdaySpringSummer: ClassLocation = {
  href: "/learn/2025/spring-summer/brookview-breaking-class",
  dayOfWeek: "Tuesday",
  location: PLACES.brookview,
  classes: [
    {
      title: "Intermediate Breaking",
      time: "6:00 - 7:00 PM",
      canRegister: true,
      ageRange: "Ages 10+",
      href: "/learn/2025/spring-summer/brookview-breaking-class",
    },
  ],
};

export const springSummer2025 = [tuesdaySpringSummer];

export const winter2025Classes = [mondayWinter2025, tuesdayWinter2025];
