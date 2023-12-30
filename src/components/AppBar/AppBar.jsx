import { ReactComponent as Logo } from "../../images/logo.svg"
import css from "./AppBar.module.css"

const AppBar = () => (
    <header className={css.header}>
      <div className={css.logoBox}>
        <Logo className={css.logo}/>
      </div>
      <nav className={css.navMenu}>
        <ul className={css.navMenuList}>
          <li className={css.navItem}>Features</li>
          <li className={css.navItem}>Team</li>
          <li className={css.navItem}>Sign In</li>
        </ul>
      </nav>
    </header>
)


export default AppBar