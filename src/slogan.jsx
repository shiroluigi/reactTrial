import style from "./slogan.module.css"

function slogan()
{
    return(
        <>
            <div className={style.sloganBanner}>
                <div className={style.sloganText}>
                    未来の平和は戦って勝ちとるんだ！
                </div>
            </div>
        </>
    );
}

export default slogan