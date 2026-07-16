import { useParams } from "react-router";
import { ProductDescription, ProductImage, ProductInfo } from "../../exports";
import MainLayout from "../../Templates/MainLayout/MainLayout";
import { productDetailsEarrings, productDetailsEngagement, productDetailsGlasses, productDetailsMakeup, type Product } from "../../Data/Data";

function PageProduct() {
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
        return <h1>Produto não encontrado.</h1>;
    }
    return (
        <MainLayout>
            <section>
                <div>
                    <ProductImage product={product} />
                    <ProductInfo product={product} />
                </div>
                <div>
                    <ProductDescription product={product} />
                </div>
            </section>
        </MainLayout>
    );
}

export default PageProduct;