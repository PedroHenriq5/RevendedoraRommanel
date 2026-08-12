import Styles from './Footer.module.css';

function Footer(){
    return(
        <footer className={Styles.footer}>
            <p>Criado apenas para fins de demonstração e aprendizado.</p>
            <a href="#">@Pedro_Henrique</a>
        </footer>
    )
}

export default Footer;