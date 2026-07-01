import Styles from "./Banner.module.css"

type BannerProps = {
    url: string;
    text: string;
}


function Banner({url, text}: BannerProps) {
    return(
        <main className={Styles.containerBanner}>
            <div className={Styles.text}>
                <h1>Eternidade começa aqui</h1>
                <p>Momentos especiais exigem a joia perfeita, nossas alianças são a expressão de um amor eterno.</p>
            </div>
            <img className={Styles.image} src={url} alt={text} />
        </main>
    )
}

export default Banner;
