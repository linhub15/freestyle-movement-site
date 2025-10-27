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

const lymburn: Place = {
  name: "Lymburn School",
  address: "18710 72 Avenue NW, Edmonton",
  mapUrl: "https://maps.app.goo.gl/ybTEv3moePjnEEeV7",
};
const brookview: Place = {
  name: "Brookview Community League",
  address: "280 Bulyea Rd NW, Edmonton",
  mapUrl: "https://maps.app.goo.gl/qj14QES7gk65wWSNA",
};

const thecode: Place = {
  name: "The Code YEG",
  address: "11602 119 St NW, Edmonton",
  mapUrl: "https://maps.app.goo.gl/zJ3SEJcr2D2QHLhE7",
};

export const PLACES = {
  aldergrove,
  lymburn,
  brookview,
  thecode,
};
