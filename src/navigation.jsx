import style from "./navbar.module.css"

function navigation()
{
    return ( 
        <>
        <nav className={style.nav}>
            <div className={style.text}>
                Welcome!!!!
            </div>
            <ul className={style.items}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        </>
    )
}

export default navigation