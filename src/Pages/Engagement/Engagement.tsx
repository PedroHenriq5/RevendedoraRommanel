import { productDetailsEngagement } from "../../Data/Data";
import { Card, Banner, ButtonReturn } from "../../exports";
import MainLayout from "../../Templates/MainLayout/MainLayout";

import BannerIMG from "../../assets/Images/Banner-marriage.png"



function Engagement() {
    return(
        <MainLayout>
            <ButtonReturn />
            <Banner  url={BannerIMG} text="Banner de Exemplo" title="Eternidade começa aqui." slogan="Momentos especiais exigem a joia perfeita." />
            <Card 
                Title="Conheça todos os nossos modelos de alianças" 
                products={productDetailsEngagement}
                getHref={(item) => `/product/${item.product}/${item.id}`}
             />
        </MainLayout>
    )   
}

export default Engagement;