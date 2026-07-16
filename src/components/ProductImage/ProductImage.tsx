import type { Product } from '../../Data/Data';
import Styles from './ProductImage.module.css';

type ProductImageProps = {
    product: Product;
};

function ProductImage({ product }: ProductImageProps) {
    return (
        <div className={Styles.productImage}>
            <img src={product.image} alt={product.alt} />
        </div>
    )
}

export default ProductImage;