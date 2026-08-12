import type { Product } from '../../Data/Data';
import Button from '../Button/Button';
import Styles from './ProductInfo.module.css';

type ProductInfoProps = {
  product: Product;
}

function ProductInfo({ product }: ProductInfoProps) {
  return (
    <section className={Styles.productInfo}>
      <div className={Styles.productDetails}>
        <h1>{product.product}</h1>
      </div>
      
      <div className={Styles.priceContainer}>
        <span className={Styles.price}>R$ {product.price}</span>
      </div>

      <div className={Styles.buttonContainer}>
        <Button text="Add to Cart" onClick={() => console.log('Added to cart')} />
      </div>
    </section>
  );
}

export default ProductInfo;