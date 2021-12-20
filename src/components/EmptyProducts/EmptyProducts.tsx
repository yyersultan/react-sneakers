import './EmptyProducts.css'

export const EmptyProducts = ():JSX.Element => {
    return (
        <div className = "EmptyProducts">
            <i className="far fa-times-circle" />
            <h2>К сожалению, раздел пуст</h2>
            <div>В данный момент нет активных товаров</div>
        </div>
    )
}