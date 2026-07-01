import { productDetails } from "../../Data/Data";
import { Card, Banner, ButtonReturn } from "../../exports";
import MainLayout from "../../Templates/MainLayout/MainLayout";

import BannerMarriage from "../../assets/Images/Banner-marriage.png"



function Alliances() {
    return(
        <MainLayout>
            <ButtonReturn />
            <Banner url={BannerMarriage} text="Banner de Exemplo" />
            <Card Title="Modelos" products={productDetails} />
        </MainLayout>
    )   
}

export default Alliances;