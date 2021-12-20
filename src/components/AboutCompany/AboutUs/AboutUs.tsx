import './AboutUs.css';

export const AboutUs = ():JSX.Element => {
    return (
        <div className="about_shop">
        <div className="about_shop_text">
            <div className="about_company">
                О компании
            </div>
            <div className="about_shop_name">
                Интернет-магазин SneakerTown
            </div>
            <div className="about_text">
                Наша компания была основана в 1997 году, 
                а наш интернет-магазин стал одним из первых магазинов, 
                осуществляющих on-line продажу обуви в регионе. 
                Компания специализируется на оптовой и розничной
                продаже обуви. На данный момент мы представляем 
                собой крупную компанию, владеющую интернет–магазином
                и имеющую в своей сети единый call-центр 
            </div>
        </div>
        <div>
            <img src="https://sneakertown.kz/upload/resize_cache/iblock/95d/1000_1000_0/95d6308f7ac513e8b452f7ac0aeab642.jpg" alt="" />
        </div>
    </div>
    )
}