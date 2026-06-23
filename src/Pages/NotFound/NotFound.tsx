import MainLayout from "../../Templates/MainLayout/MainLayout";

import styles from "./NotFound.module.css";

function NotFound() {
    return (
        <MainLayout>   
            <main className={styles.MainNotFound}>
                <h1>404</h1>
                <h2>Página não encontrada</h2>
                <p>Ops! Parece que o caminho que você procura não existe ou não foi aberto.</p>
                <p>Vamos te ajudar a encontrar o caminho de volta à página inicial.</p>
                <a href="/" className={styles.HomeLink}>Voltar para Home</a> 
            </main>
        </MainLayout>
    )
}

export default NotFound;