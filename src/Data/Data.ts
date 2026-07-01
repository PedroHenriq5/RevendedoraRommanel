import aliancas from '../assets/Images/Alianca-card.jpg';
import oculos from '../assets/Images/Oculos-card.jpg';
import maquiagem from '../assets/Images/Maquiagem-card.jpg';
import brinco from '../assets/Images/Brincos-card.jpg';

export interface Product {
    id: number;
    product: string;
    image: string;
    alt: string;
    description: string;
}

export const productData: Product[] = [
    { id: 1, product: "aliancas", image: aliancas, alt: "Alianças", description: "Alianças" },
    { id: 2, product: "oculos", image: oculos, alt: "Oculos", description: "Oculos" },
    { id: 3, product: "maquiagem", image: maquiagem, alt: "Maquiagem", description: "Maquiagem" },
    { id: 4, product: "brinco", image: brinco, alt: "Brincos", description: "Brincos" }
];

import AmostraAlianca from '../assets/Images/Amostra-Alianca.jpg';

export const productDetails: Product[] = [
    { id: 1, product: "aliancas", image: AmostraAlianca, alt: "Alianças", description: "Ouro 19k 220,99" },
    { id: 2, product: "aliancas", image: AmostraAlianca, alt: "Alianças", description: "Ouro 19k 220,99" },
    { id: 3, product: "aliancas", image: AmostraAlianca, alt: "Alianças", description: "Ouro 19k 220,99" },
    { id: 4, product: "aliancas", image: AmostraAlianca, alt: "Alianças", description: "Ouro 19k 220,99" },
    { id: 5, product: "aliancas", image: AmostraAlianca, alt: "Alianças", description: "Ouro 19k 220,99" },
]