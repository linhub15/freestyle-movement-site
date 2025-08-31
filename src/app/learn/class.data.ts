import { PLACES, type Place } from "@/data/places";
import type { Route } from "next";

export type DanceClass = {
  title: string;
  time: string;
  canRegister?: boolean;
  ageRange?: string;
  href?: Route;
};

type ClassLocation = {
  dayOfWeek: string;
  location: Place;
  href?: Route;
  classes: DanceClass[];
};

type Semester = {
  [key: string]: { label: string; locations: ClassLocation[] };
};
export const classes: Semester = {
  "2025_fall": {
    label: "Fall 2025 Schedule",
    locations: [
      {
        // href: "/learn/2025/fall/aldergrove-breaking-class",
        dayOfWeek: "Monday",
        location: PLACES.aldergrove,
        classes: [
          {
            title: "Beginner Breaking",
            time: "6:00 - 7:00 PM",
            canRegister: false,
            ageRange: "Ages 7+",
            // href: "/learn/2025/spring-summer/aldergrove-breaking-class",
          },
        ],
      },
      {
        dayOfWeek: "Tuesday",
        href: "/learn/2025/fall/brookview-breaking-class",
        location: PLACES.brookview,
        classes: [
          {
            title: "Intermediate Breaking",
            time: "6:00 - 7:00 PM",
            canRegister: true,
            ageRange: "Ages 10+",
            href: "/learn/2025/fall/brookview-breaking-class",
          },
        ],
      },
      {
        dayOfWeek: "Friday",
        href: "/learn/2025/fall/thecode-breaking-class",
        location: PLACES.thecode,
        classes: [
          {
            title: "Beginner Breaking",
            time: "7:00 - 8:00 PM",
            canRegister: true,
            ageRange: "Ages 10+",
            href: "/learn/2025/fall/thecode-breaking-class",
          },
        ],
      },
    ],
  },
  "2025_spring_summer": {
    label: "Spring & Summer 2025 Schedule",
    locations: [
      {
        href: "/learn/2025/spring-summer/aldergrove-breaking-class",
        dayOfWeek: "Monday",
        location: PLACES.aldergrove,
        classes: [
          {
            title: "Beginner Breaking",
            time: "6:30 - 7:00 PM",
            canRegister: true,
            ageRange: "Ages 7+",
            href: "/learn/2025/spring-summer/aldergrove-breaking-class",
          },
          {
            title: "Beginner Youth Breaking",
            time: "7:00 - 8:00 PM",
            canRegister: true,
            ageRange: "Ages 8+",
            href: "/learn/2025/spring-summer/aldergrove-breaking-class#beginner-youth-breaking",
          },
        ],
      },
      {
        href: "/learn/2025/spring-summer/brookview-breaking-class",
        dayOfWeek: "Tuesday",
        location: PLACES.brookview,
        classes: [
          {
            title: "Intermediate Breaking",
            time: "6:00 - 7:00 PM",
            canRegister: false,
            ageRange: "Ages 10+",
            href: "/learn/2025/spring-summer/brookview-breaking-class",
          },
        ],
      },
    ],
  },
};
