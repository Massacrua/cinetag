import logo from "./Logo-cinetag-branco 1.png"
import styles from "./Cabecalho.module.css"
import CabecalhoLink from "components/CabecalhoLink";
const { Link } = require("react-router-dom");

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do Cinetag"/>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho