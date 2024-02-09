export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
};

export type UserWithAlbum = User & Album;

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type Geo = {
  lat: string;
  lng: string;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type Album = {
  id: string;
  thumbnailUrl: string;
};
