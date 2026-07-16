import type { Product } from '../../Data/Data';
import Button from '../Button/Button';
import Styles from './ProductInfo.module.css';

type ProductInfoProps = {
  product: Product;
}

function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className={Styles.productInfo}>
      <h1>{product.product}</h1>
      <p>{product.description}</p>
      <span className={Styles.price}>{product.price}</span>
      <Button text="Add to Cart" onClick={() => console.log('Added to cart')} />
    </div>
  );
}

export default ProductInfo;