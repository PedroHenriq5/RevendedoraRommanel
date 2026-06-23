import styles from "./Button.module.css";

type BtnProps = {
  text: string;
  onClick?: () => void;
}

function Button({ text, onClick }: BtnProps) {
  return (

      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
  )
}

export default Button;
