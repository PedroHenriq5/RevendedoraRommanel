import { NavBar, Footer } from "../../exports"


type MainLayout = {
    children: React.ReactNode;
}

function MainLayout({ children }: MainLayout) {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout;