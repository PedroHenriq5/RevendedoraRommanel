import { productDetailsEarrings } from "../../Data/Data";
import { Card, Banner, ButtonReturn } from "../../exports";
import MainLayout from "../../Templates/MainLayout/MainLayout";

import BannerIMG from "../../assets/Images/Banner-Brincos.png"



function Earrings() {
    return(
        <MainLayout>
            <ButtonReturn />
            <Banner url={BannerIMG} text="Banner de Exemplo" title="Elegância que brilha em cada detalhe." slogan="Destaque com estilo e sofisticação." />
            <Card 
                Title="Conheça todos os nossos modelos de brincos" 
                products={productDetailsEarrings} 
                getHref={(item) => `/product/${item.product}/${item.id}`}
             />
        </MainLayout>
    )   
}

export default Earrings;