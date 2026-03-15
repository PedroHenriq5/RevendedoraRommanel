import styles from "./Input.module.css";

type InputProps = {
  placeholder: string;
}

function Input({ placeholder }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  )
}

export default Input;