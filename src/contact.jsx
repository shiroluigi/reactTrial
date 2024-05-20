import style from "./contact.module.css"

function contact()
{
    return(
        <>
            <div className={style.blob}>
                <div className={style.content}>
                <h3>Contact me at: </h3>
                <a href="https://www.linkedin.com/in/rohit-mondal-230996219/">
                    LinkedIn
                </a>
                </div>
            </div>
        </>
    )
}

export default contact