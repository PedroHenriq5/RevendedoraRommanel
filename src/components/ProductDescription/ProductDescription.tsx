import type { Product } from '../../Data/Data';
import Styles from './ProductDescription.module.css';

type ProductDescriptionProps = {
    product: Product;
}

function ProductDescription({ product }: ProductDescriptionProps) {
    return (
        <section className={Styles.productDescription}>
            <h2>{product.product}</h2>
            <div className={Styles.productDescriptionText}>
                <p>{product.description}</p>
                <p>{product.description}</p>
            </div>
        </section>
    )
}

export default ProductDescription;