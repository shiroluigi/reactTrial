import style from "./navbar.module.css"
import { Link } from "react-router-dom"

function navigation()
{
    return ( 
        <>
        <nav className={style.nav}>
            <div className={style.text}>
                Welcome!!!!
            </div>
            <ul className={style.items}>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </nav>
        </>
    )
}

export default navigation