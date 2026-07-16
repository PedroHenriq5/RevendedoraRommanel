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
    price?: string;
}

export const productData: Product[] = [
    { id: 1, product: "aliancas", image: aliancas, alt: "Alianças", description: "Alianças"},
    { id: 2, product: "oculos", image: oculos, alt: "Oculos", description: "Oculos"},
    { id: 3, product: "maquiagem", image: maquiagem, alt: "Maquiagem", description: "Maquiagem"},
    { id: 4, product: "brincos", image: brinco, alt: "Brincos", description: "Brincos" }
];

import AmostraAlianca from '../assets/Images/Amostra-Alianca.jpg';
import AmostraOculos from '../assets/Images/Amostra-oculos.png';
import AmostraMaquiagem from '../assets/Images/Amostra-Batom.jpg';
import AmostraBrinco from '../assets/Images/Amostra-Brinco.png';

export const productDetailsEngagement : Product[] = [
    { id: 1, product: "aliancas", image: AmostraAlianca, alt: "Alianças", description: "Ouro 19k 220,99", price: "220,99" },
    { id: 2, product: "aliancas", image: AmostraAlianca, alt: "Alianças", description: "Ouro 19k 220,99", price: "220,99" },
    { id: 3, product: "aliancas", image: AmostraAlianca, alt: "Alianças", description: "Ouro 19k 220,99", price: "220,99" },
    { id: 4, product: "aliancas", image: AmostraAlianca, alt: "Alianças", description: "Ouro 19k 220,99", price: "220,99" },
    { id: 5, product: "aliancas", image: AmostraAlianca, alt: "Alianças", description: "Ouro 19k 220,99", price: "220,99" },
]

export const productDetailsGlasses: Product[] = [
    { id: 1, product: "oculos", image: AmostraOculos, alt: "Oculos", description: "Oculos de sol dourado 220,99", price: "220,99" },
    { id: 2, product: "oculos", image: AmostraOculos, alt: "Oculos", description: "Oculos de sol dourado 220,99", price: "220,99" },
    { id: 3, product: "oculos", image: AmostraOculos, alt: "Oculos", description: "Oculos de sol dourado 220,99", price: "220,99" },
    { id: 4, product: "oculos", image: AmostraOculos, alt: "Oculos", description: "Oculos de sol dourado 220,99", price: "220,99" },
    { id: 5, product: "oculos", image: AmostraOculos, alt: "Oculos", description: "Oculos de sol dourado 220,99", price: "220,99" },
]
export const productDetailsMakeup: Product[] = [
    { id: 1, product: "maquiagem", image: AmostraMaquiagem, alt: "Maquiagem", description: "Vermelho Escuro 220,99", price: "220,99" },
    { id: 2, product: "maquiagem", image: AmostraMaquiagem, alt: "Maquiagem", description: "Vermelho Escuro 220,99", price: "220,99" },
    { id: 3, product: "maquiagem", image: AmostraMaquiagem, alt: "Maquiagem", description: "Vermelho Escuro 220,99", price: "220,99" },
    { id: 4, product: "maquiagem", image: AmostraMaquiagem, alt: "Maquiagem", description: "Vermelho Escuro 220,99", price: "220,99" },
    { id: 5, product: "maquiagem", image: AmostraMaquiagem, alt: "Maquiagem", description: "Vermelho Escuro 220,99", price: "220,99" },
]
export const productDetailsEarrings: Product[] = [
    { id: 1, product: "brincos", image: AmostraBrinco, alt: "Brincos", description: "Ouro 2k 220,99", price: "220,99" },
    { id: 2, product: "brincos", image: AmostraBrinco, alt: "Brincos", description: "Ouro 2k 220,99", price: "220,99" },
    { id: 3, product: "brincos", image: AmostraBrinco, alt: "Brincos", description: "Ouro 2k 220,99", price: "220,99" },
    { id: 4, product: "brincos", image: AmostraBrinco, alt: "Brincos", description: "Ouro 2k 220,99", price: "220,99" },
    { id: 5, product: "brincos", image: AmostraBrinco, alt: "Brincos", description: "Ouro 2k 220,99", price: "220,99" },
]