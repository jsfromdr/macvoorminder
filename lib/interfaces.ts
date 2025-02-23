/******
 Generic Types for the Static UI
*****/

/**
 * @Product
 **/

export default interface ProductProps {
  productImage: string;
  productTitle: string;
  price: number;
  discount: number;
  discountedPrice: number;
  cpu: string;
  gpu: string;
  modelYear: number;
  color: string;
}
