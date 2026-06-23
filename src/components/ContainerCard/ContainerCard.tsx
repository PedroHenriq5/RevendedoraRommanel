import { CardItem } from "../../exports";
import aliancas from '../../assets/Images/Alianca-card.jpg';
import oculos from '../../assets/Images/Oculos-card.jpg';
import maquiagem from '../../assets/Images/Maquiagem-card.jpg';
import brinco from '../../assets/Images/Brincos-card.jpg';

import Style from './ContainerCard.module.css';

const productData = [
    { id: 1, product: "aliancas", image: aliancas, alt: "Alianças", description: "Alianças" },
    { id: 2, product: "oculos", image: oculos, alt: "Oculos", description: "Oculos" },
    { id: 3, product: "maquiagem", image: maquiagem, alt: "Maquiagem", description: "Maquiagem" },
    { id: 4, product: "brinco", image: brinco, alt: "Brincos", description: "Brincos" }
];

function Card() {
    return (
        <section className={Style.Container}>
            <div className={Style.Header}>
                <h1>Coleções</h1>
            </div>
            <div className={Style.Cards}>
                {productData.map((product) => (
                    <div className={Style.CardItem} key={product.id}>
                        <CardItem href={`/product/${product.product.toLowerCase()}`}>
                            <img src={product.image} alt={product.alt} />
                        </CardItem>
                        <p className={Style.ProductDescription}>{product.description}</p>
                    </div>
                ))}
            </div>
        </section>


    )
}

export default Card;