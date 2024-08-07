export type Place = {
  name: string;
  address: string;
  mapUrl: string;
};

const aldergrove: Place = {
  name: "Aldergrove Community League",
  address: "8535 182 St NW, Edmonton",
  mapUrl: "https://maps.app.goo.gl/25Y1MXtwDDzogxh97",
};
const brookview: Place = {
  name: "Brookview Community League",
  address: "280 Bulyea Rd NW, Edmonton",
  mapUrl: "https://maps.app.goo.gl/qj14QES7gk65wWSNA",
};

export const PLACES = {
  aldergrove,
  brookview,
};
