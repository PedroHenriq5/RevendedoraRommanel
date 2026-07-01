import { productData } from "../../Data/Data";
import MainLayout from "../../Templates/MainLayout/MainLayout";
import {Carousel, Card } from '../../exports';


function Home() {
    return(
        <>
            <MainLayout>
                <Carousel />
                <Card Title="Coleções" products={productData} />  
                  
            </MainLayout>
            
        </>
    )
}

export default Home;