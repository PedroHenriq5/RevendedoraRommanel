import style from "./NavBar.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function NavBar() {
  return (
    <nav className={style.navBar}>
      <div className={style.logo}>
        <img src="" alt="logo" />
      </div>

      <div className={style.search}>
        <Input placeholder="Pesquisar" />
      </div>

      <div className={style.buttons}>
        <Button text="Pesquisar" onClick={() => {}} />
        <Button text="Contato" onClick={() => {}} />
      </div>
    </nav>
  );
}

export default NavBar;