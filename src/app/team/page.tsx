import type { Metadata } from "next";
import { Container } from "../../components/Container";

type Member = {
  name: string;
  roles: string;
};

const members: Member[] = [
  {
    "name": "Hubert Lin",
    "roles": "Event planner, dance instructor, web developer",
  },
  {
    "name": "Pranaya Prajapati",
    "roles": "Social media, event planner, dance instructor",
  },
  {
    "name": "Elaine Ho",
    "roles": "Finance exec, event planner, dance instructor",
  },
  {
    "name": "Patricia Limcangco",
    "roles": "Graphics & print, event planner, web developer",
  },
  {
    "name": "Kevin Carreon",
    "roles": "Dj, dance instructor",
  },
  {
    "name": "Jeff Baglinit",
    "roles": "Content creator, videographer, event planner, dance instructor",
  },
  {
    "name": "Sarah Trawick",
    "roles": "Dance instructor, event planner",
  },
  {
    "name": "Jin Lee",
    "roles": "Event planner, Dance instructor",
  },
  {
    "name": "Phil De Castro",
    "roles": "Graphic designer, videographer",
  },
  {
    "name": "Josh Kearney",
    "roles": "Event planner",
  },
  {
    "name": "Sion Kim",
    "roles": "Event planner, dance instructor, photographer"
  }
];

export const metadata: Metadata = {
  title: "Team | Freestyle Movement",
  description: "Our team  of volunteers"
};

export default function Team() {
  return (
    <>
      <Container>
        <h1 className="text-3xl tracking-tight text-zinc-300">
          Meet the Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 gap-12">
          {members.map((item, idx) => (
            <div key={idx}>
              <h2 className="text-lg">{item.name}</h2>
              <p className="text-zinc-500">{item.roles}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
