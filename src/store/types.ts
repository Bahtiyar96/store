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
