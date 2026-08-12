import { NavBar, Footer } from "../../exports"
import Styles from "./MainLayout.module.css";

type MainLayout = {
    children: React.ReactNode;
}

function MainLayout({ children }: MainLayout) {
    return (
        <div className={Styles.mainLayout}>
            <NavBar />
            <main className={Styles.mainContent}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout;