import style from "./about.module.css"

function about()
{
    return (
        <>
            <div className={style.container}>
                <div className={style.upper}>
                    <p>
                        This website is completely a personal project that was made 
                        in order to learn React. All the credit for the images and fonts used in the project are to the
                        respective owners, this website will never be monetized or used for any type of personal
                        gain.
                    </p>
                </div>
                <div className={style.lower}>
                    <p>
                        I have a added a list of Anime shows that are really nice and one must see these shows. Clicking 
                        on these shows will redirect you to the MAL page of the shows for furthur information.
                    </p>
                </div>
            </div>
        </>
    )
}

export default about