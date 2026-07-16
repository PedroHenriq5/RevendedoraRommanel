import type { Product } from '../../Data/Data';
import Styles from './ProductDescription.module.css';

type ProductDescriptionProps = {
    product: Product;
}

function ProductDescription({ product }: ProductDescriptionProps) {
    return (
        <div className={Styles.productDescription}>
            <h2>{product.product}</h2>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductDescription;