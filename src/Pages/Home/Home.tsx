import { productData } from "../../Data/Data";
import MainLayout from "../../Templates/MainLayout/MainLayout";
import {Carousel, Card } from '../../exports';


function Home() {
    return(
        <>
            <MainLayout>
                <Carousel />
                <Card 
                    Title="Coleções" 
                    products={productData} 
                    getHref={(item) => `/product/${item.product}`}
                />                   
            </MainLayout>
            
        </>
    )
}

export default Home;