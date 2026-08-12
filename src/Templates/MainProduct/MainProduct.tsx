import { useParams } from "react-router";
import { ProductDescription, ProductImage, ProductInfo, NotFound } from "../../exports";
import MainLayout from "../../Templates/MainLayout/MainLayout";
import { productDetailsEarrings, productDetailsEngagement, productDetailsGlasses, productDetailsMakeup, type Product } from "../../Data/Data";

import Styles from "./MainProduct.module.css";

function MainProduct() {
    const { category, id } = useParams();

    let products: Product[] = [];

    switch (category) {
        case "aliancas":
            products = productDetailsEngagement;
            break;
        case "oculos":
            products = productDetailsGlasses;
            break;
        case "maquiagem":
            products = productDetailsMakeup;
            break;
        case "brincos":
            products = productDetailsEarrings;
            break;
    }

    const product = products.find((product) => product.id === Number(id));
    if (!product) {
        return <NotFound />;
    }

    return (
        <MainLayout>
            <main className={Styles.mainProduct}>

                <section className={Styles.productSection}>
                    
                    <div className={Styles.productCategory}>

                        <div className={Styles.productImage}>
                            <ProductImage product={product} />
                        </div>

                        <div className={Styles.productInfo}>
                            <ProductInfo product={product} />
                        </div>

                    </div>
                    
                </section>

                <section className={Styles.productDescriptionSection}>
                    <ProductDescription product={product} />
                </section>

            </main>
        </MainLayout>
    );
}

export default MainProduct;
