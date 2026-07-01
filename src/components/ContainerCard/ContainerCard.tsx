import type { Product } from "../../Data/Data";
import { CardItem } from "../../exports";
import Style from './ContainerCard.module.css';

type CardProps = {
    products: Product[];
    Title: string;
}

function Card({ products = [], Title}: CardProps) {
    return (
        <section className={Style.Container}>
            <div className={Style.Header}>
                <h1>{Title}</h1>
            </div>
            <div className={Style.Cards}>
                {products.map((iten) => (
                    <div className={Style.CardItem} key={iten.id}>
                        <CardItem href={`/product/${iten.product.toLowerCase()}`}>
                            <img src={iten.image} alt={iten.alt} />
                        </CardItem>
                        <p className={Style.ProductDescription}>{iten.description}</p>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Card;
