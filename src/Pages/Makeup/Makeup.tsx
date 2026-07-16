import { productDetailsMakeup } from "../../Data/Data";
import { Card, Banner, ButtonReturn } from "../../exports";
import MainLayout from "../../Templates/MainLayout/MainLayout";

import BannerIMG from "../../assets/Images/Banner-maquiagem.png"



function Makeup() {
    return(
        <MainLayout>
            <ButtonReturn />
            <Banner url={BannerIMG} text="Banner de Exemplo" title="Transforme seu estilo." slogan="Descubra a beleza que há em você." />
            <Card 
                Title="Conheça todos os nossos modelos de maquiagem" 
                products={productDetailsMakeup} 
                getHref={(item) => `/product/${item.product}/${item.id}`}
             />
        </MainLayout>
    )   
}

export default Makeup;