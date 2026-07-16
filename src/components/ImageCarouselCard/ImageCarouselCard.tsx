import Styles from "./ImageCarouselCard.module.css";

function ImageBanner({ imageSrc, altText }: { imageSrc: string, altText: string }) {
  return (
    <div className={Styles.imageBanner}>
      <img src={imageSrc} alt={altText} className={Styles.image} />
    </div>
  );
}

export default ImageBanner;