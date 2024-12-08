import { PLACES, type Place } from "@/data/places";
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

const mondayClasses: ClassLocation = {
  href: "/learn/aldergrove-breaking-class",
  dayOfWeek: "Monday",
  location: PLACES.aldergrove,
  classes: [
    {
      title: "Intro to Breaking",
      time: "6:30 - 7:00 PM",
      canRegister: undefined,
      ageRange: "Kids all ages",
      href: "/learn/aldergrove-breaking-class#intro-to-breaking",
    },
    {
      title: "Beginner Youth Breaking",
      time: "7:00 - 8:30 PM",
      canRegister: undefined,
      ageRange: "Ages 8+",
      href: "/learn/aldergrove-breaking-class#beginner-youth-breaking",
    },
  ],
};

const tuesdayClasses: ClassLocation = {
  href: "/learn/brookview-breaking-class",
  dayOfWeek: "Tuesday",
  location: PLACES.brookview,
  classes: [
    {
      title: "Intro to Breaking",
      time: "5:30 - 6:00 PM",
      canRegister: undefined,
      ageRange: "Ages 10+",
      href: "/learn/brookview-breaking-class#intro-to-breaking",
    },
    {
      title: "Intermediate Youth Breaking",
      time: "6:00 - 7:00 PM",
      canRegister: undefined,
      ageRange: "Ages 10+",
      href: "/learn/brookview-breaking-class#intermediate-youth-breaking",
    },
  ],
};

const mondayWinter2025: ClassLocation = {
  href: "/learn/winter-2025/aldergrove-breaking-class",
  dayOfWeek: "Monday",
  location: PLACES.aldergrove,
  classes: [
    {
      title: "Intro to Breaking",
      time: "5:30 - 6:00 PM",
      canRegister: undefined,
      ageRange: "Ages 5+",
      href: "/learn/winter-2025/aldergrove-breaking-class#intro-to-breaking",
    },
    {
      title: "Beginner Youth Breaking",
      time: "6:00 - 7:00 PM",
      canRegister: true,
      ageRange: "Ages 8+",
      href: "/learn/winter-2025/aldergrove-breaking-class#beginner-youth-breaking",
    },
  ],
};

const tuesdayWinter2025: ClassLocation = {
  href: "/learn/winter-2025/brookview-breaking-class",
  dayOfWeek: "Tuesday",
  location: PLACES.brookview,
  classes: [
    {
      title: "Intro to Breaking",
      time: "5:30 - 6:00 PM",
      canRegister: undefined,
      ageRange: "Ages 10+",
      href: "/learn/winter-2025/brookview-breaking-class#intro-to-breaking",
    },
    {
      title: "Intermediate Youth Breaking",
      time: "6:00 - 7:00 PM",
      canRegister: true,
      ageRange: "Ages 10+",
      href: "/learn/winter-2025/brookview-breaking-class#intermediate-youth-breaking",
    },
  ],
};

export const winter2025Classes = [mondayWinter2025, tuesdayWinter2025];

export const classes = [mondayClasses, tuesdayClasses];
