import style from "./NavBar.module.css";
import logo from "../../assets/Images/logo.png";

import Input from "../Input/Input";

function NavBar() {
  return (
    <nav className={style.navBar}>
      <div className={style.logo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={style.search}>
        <Input placeholder="Exemplo: Aliança de ..." />
      </div>

      <div className={style.LinkContainer}>
        <a href="#" className={`${style.linker} ${style.searchBtn}`}>
          Pesquisar
        </a>
        <a href="#" className={`${style.linker} ${style.contactBtn}`}>
          Contato
        </a>
      </div>
    </nav>
  );
}

export default NavBar;