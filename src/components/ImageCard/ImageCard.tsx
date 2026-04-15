import Styles from "./ImageCard.module.css";

function ImageCard({ imageSrc, altText }: { imageSrc: string, altText: string }) {
  return (
    <div className={Styles.imageCard}>
      <img src={imageSrc} alt={altText} className={Styles.image} />
    </div>
  );
}

export default ImageCard;