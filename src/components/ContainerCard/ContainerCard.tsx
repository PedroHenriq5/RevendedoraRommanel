import { CardItem } from "../../exports";
import aliancas from '../../assets/Images/Alianca-card.jpg';


import Style from './ContainerCard.module.css';

const productData = [
    { id: 1, image: aliancas, alt: "Alianças de Ouro", description: "Alianças de ouro 18k com design exclusivo." },
    { id: 2, image: aliancas, alt: "Anéis de Noivado", description: "Anéis de noivado com diamantes certificados." },
    { id: 3, image: aliancas, alt: "Brincos de Prata", description: "Brincos de prata 925 com pedras naturais." },
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
                        <CardItem href={`/product/${product.id}`}>
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