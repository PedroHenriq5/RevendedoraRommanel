import MainLayout from "../../Templates/MainLayout/MainLayout";
import {Carousel, Card } from '../../exports';


function Home() {
    return(
        <>
            <MainLayout>
                <Carousel />
                <Card/>    
            </MainLayout>
            
        </>
    )
}

export default Home;