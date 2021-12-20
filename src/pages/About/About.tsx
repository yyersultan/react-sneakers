import './About.css';

export const About = ():JSX.Element => {
    return (
        <div className="About">
            <h1 className = "About_header">О компании</h1>
            <div className='About_content'>
                <div>Наша компания была основана в 1997 году,
                    а наш интернет-магазин стал одним из первых магазинов,
                    осуществляющих online продажу обуви в Казахстане.
                </div>
                <div>
                    На данный момент мы специализируемся на оптовой и розничной продаже обуви,
                    представляем собой крупную компанию, владеющую интернет– магазином и физическим
                    магазином, с единым call-центром.
                </div>
                <div>
                    Магазин обеспечил наличие самых продвинутых моделей со всего мира, при этом сделав цены очень доступными.
                </div>
                <div>
                В наличии более 300 моделей на любой вкус и цвет, обновляемых еженедельно.
                </div>
                
                <ol className = "About_UL_list">
                    <li>Уникальная система лояльности.</li>
                    <li>Постоянная система скидок.</li>
                    <li>Разумные цены и отличное качество.</li>
                    <li>85% клиентов возвращаются к нам за повторной покупкой.</li>
                    <li>100% гарантия обмена или возврата в течении 30 дней</li>
                    <li>Когда покупатели чего-то хотят, они хотят это "ЗДЕСЬ И СЕЙЧАС"! Мы ваши первые помощники в этом.</li>
                </ol>
            </div>

            <div className = "About_Image_blocks">
                <img src="https://partner.gira.de/abbildungen/HomeOffice_20936_1586950695.jpg" alt="i" />
                <img src="https://manofmany.com/wp-content/uploads/2020/03/Feature-Image-2.png" alt="" />
                <img src="http://retaildesignblog.net/wp-content/uploads/2017/02/Bruut-2.0-store-by-Mietze-Onderwater-Hoofddorp-Amsterdam-The-Netherlands.jpg" alt="" />
                <img src="https://cdn.trendhunterstatic.com/thumbs/amsterdam-store.jpeg" alt="" />
                <img src="https://media.gq.com/photos/563939b4b318c58a03060e00/master/w_1600%2Cc_limit/gq-top-100-xhibition-01.jpg" alt="" />
            </div>
        </div>
    )
}