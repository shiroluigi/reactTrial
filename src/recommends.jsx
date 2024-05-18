import style from "./recommends.module.css"

function recommends(props)
{
    return(
            <>
            <div className={style.cardContainer}>
                <div className={style.nai}>
                    <h3>{props.name}</h3>
                    <hr></hr>
                    <a href={props.url}><img src={props.imageurl} alt={props.name}></img></a>
                </div>
                <p>
                    <b>Genres: </b>
                    {props.desc}
                </p>
            </div>
            </>
    );
}

export default recommends