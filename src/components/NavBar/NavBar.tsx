import style from "./NavBar.module.css";

import Input from "../Input/Input";

function NavBar() {
  return (
    <nav className={style.navBar}>
      <div className={style.logo}>
        <img src="" alt="logo" />
      </div>

      <div className={style.search}>
        <Input placeholder="Exemplo: Aliança de ..." />
      </div>

      <div className={style.LinkContainer}>
        <a href="#" className={style.linker}>
          Pesquisar
        </a>
        <a href="#" className={style.linker}>
          Contato
        </a>
      </div>
    </nav>
  );
}

export default NavBar;