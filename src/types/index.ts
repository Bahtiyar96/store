export type Iroles = 'user' | 'admin' | 'superAdmin';

export interface IUser {
  createdAt: string;
  email: string;
  interests: Array<string>;
  name: string;
  password: string;
  phone: string;
  role: Iroles;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface IProduct {
  _id: string;
  name: string;
  brand: string;
  price: number;
  description?: string;
  image?: string;
  userId: string;
  specs: {
    cpu: string;
    ram: string;
    screen: {
      size: string;
      resolution: string;
      type: string;
    };
    camera: {
      rear: {
        resolution: string;
        aperture: string;
      };
      front: {
        resolution: string;
        aperture: string;
      };
    };
  };
}
