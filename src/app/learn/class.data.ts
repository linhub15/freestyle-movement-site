import { PLACES, type Place } from "@/data/places";
import type { Route } from "next";

export type DanceClass = {
  title: string;
  time: string;
  canRegister?: boolean;
  ageRange?: string;
};

type Class = {
  dayOfWeek: string;
  location: Place;
  href?: Route;
  classes: DanceClass[];
};

const mondayClasses: Class = {
  href: "/learn/aldergrove-breaking-class",
  dayOfWeek: "Monday",
  location: PLACES.aldergrove,
  classes: [
    {
      title: "Intro to Breaking",
      time: "6:30 - 7:00 PM",
      canRegister: undefined,
      ageRange: "Ages 8+",
    },
    {
      title: "Beginner Youth Breaking",
      time: "7:00 - 8:00 PM",
      canRegister: undefined,
      ageRange: "Ages 8+",
    },
  ],
};

const tuesdayClasses: Class = {
  href: "/learn/brookview-breaking-class",
  dayOfWeek: "Tuesday",
  location: PLACES.brookview,
  classes: [
    {
      title: "Intro to Breaking",
      time: "5:30 - 6:00 PM",
      canRegister: undefined,
      ageRange: "Ages 10+",
    },
    {
      title: "Intermediate Youth Breaking",
      time: "6:00 - 7:00 PM",
      canRegister: undefined,
      ageRange: "Ages 10+",
    },
  ],
};

export const classes = [mondayClasses, tuesdayClasses];
