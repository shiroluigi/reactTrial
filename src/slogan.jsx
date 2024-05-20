import style from "./slogan.module.css"

function slogan()
{
    return(
        <>
            <div className={style.sloganBanner}>
                <div data-text="未来の平和は戦って勝ちとるんだ！" className={style.sloganText}>
                    未来の平和は戦って勝ちとるんだ！
                </div>
            </div>
        </>
    );
}

export default slogan