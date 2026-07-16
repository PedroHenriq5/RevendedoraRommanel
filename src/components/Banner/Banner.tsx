import Styles from "./Banner.module.css"

type BannerProps = {
    url: string;
    text: string;
    title?: string;
    slogan?: string;
    isBlack?: boolean;
}


function Banner({url, text, title, slogan, isBlack}: BannerProps) {
    return(
        <main className={Styles.containerBanner}>
            <div className={Styles.text}>
                <h1 style={{ color: isBlack ? "#000" : "#fff" }}>{title}</h1>
                <p style={{ color: isBlack ? "#000" : "#fff" }}>{slogan}</p>
            </div>
            <img className={Styles.image} src={url} alt={text} />
        </main>
    )
}

export default Banner;
