import './Footer.css'

export const Footer = ():JSX.Element => {
    return(

    <footer className="footer">
    <div className="main_footer">
        <div className="footer_item">
            <div className="footer_item_head">Каталог</div>
            <div>Акции</div> 
            <div>Бренды</div>
            <div>Блог</div>
            <div>Услуги</div>
            <div>Новости</div>
        </div>
        <div className="footer_item">
            <div className="footer_item_head">Компания</div>
            <div>О компании</div>
            <div>Наша команда</div>
            <div>Контакты</div>
            <div>Сотрудничество</div>
            <div>Вакансии</div>
        </div>
        <div className="footer_item">
            <div className="footer_item_head"> Розничный магазин </div>
            <div>Отзывы</div>
            <div>Custom</div>
            <div>Оплата Kaspi QR</div>
            <div>Оферта</div>
            <div>Контакты</div>
        </div>
        <div className="footer_item">
            <div className="footer_item_head">Помощь покупателю</div>
            <div>Частые вопросы по заказам</div>
            <div>Доставка и оплата</div>
            <div>Обратная связь</div>
            <div>Обмен / Возврат / Гарантия</div>
            <div>Товары</div>
            <div>Скидки и программа лояльности</div>
        </div>
        <div className="footer_item">
            <div>87779716217</div>
            <div>Email</div>
        </div>

    </div>

    <div className="bootom_footer">

    </div>
</footer>
    ) 
}