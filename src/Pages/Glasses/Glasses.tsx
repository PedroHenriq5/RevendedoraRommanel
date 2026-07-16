import { productDetailsGlasses } from "../../Data/Data";
import { Card, Banner, ButtonReturn } from "../../exports";
import MainLayout from "../../Templates/MainLayout/MainLayout";

import BannerIMG from "../../assets/Images/Banner-Oculos.png"



function Glasses() {
    return(
        <MainLayout>
            <ButtonReturn />
            <Banner isBlack url={BannerIMG} text="Banner de Exemplo" title="Seu estilo brilha sob o sol." slogan="O mundo muda quando você muda o seu ponto de vista." />
            <Card 
                Title="Conheça todos os nossos modelos de óculos"
                products={productDetailsGlasses}
                getHref={(item) => `/product/${item.product}/${item.id}`}
             />
        </MainLayout>
    )   
}

export default Glasses;