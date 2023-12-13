import { useEffect } from 'react';
import { useCreateProductMutation } from '../../store/queries/product'

export const Orders = () => {
  const { _id } = JSON.parse(localStorage.getItem('user')!);
  const productData = {
    name: 'Laptop',
    brand: 'BrandX',
    price: 1200,
    description: 'Powerful laptop for various tasks',
    specs: {
      cpu: 'Intel Core i7',
      ram: '16GB',
      screen: {
        size: '15 inches',
        resolution: '1920x1080',
        type: 'LED'
      },
      camera: {
        rear: {
          resolution: '12MP',
          aperture: 'f/1.8'
        },
        front: {
          resolution: '8MP',
          aperture: 'f/2.0'
        }
      }
    },
    userId: _id,
  };
  const [createProduct] = useCreateProductMutation();
  useEffect(() => {
    createProduct(productData);
  }, [])
  
  return (
    <div>Orders</div>
  )
}
