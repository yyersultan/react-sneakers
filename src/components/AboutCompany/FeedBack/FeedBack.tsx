import './FeedBack.css';


export const FeedBack = ():JSX.Element => {
    return (
        <div className="otzyvy">
        <div className="otzyvy_header">
            <div className="otzyvy_title">О нас пишут</div>
            <div className="write_otzyv">
                <div>Оставить отзыв</div>
                <div>Все отзывы</div>
            </div>
        </div>

        <div className="otzyvy_body">
            <div className="otzyvy_writer">
                <div className="writer_info">
                    <img 
                    className="person_img"
                    src="https://media.gettyimages.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?s=612x612" alt=""/>
                    <div>Yersultan Yerkinbek</div>
                </div>
                <div className="rating_star">
                    <img src="star.png" alt="" />
                </div>
            </div>
            <div className="otzyv_text">
                Магазин рекомендую, заказал кроссы, до Темиртау пришли быстро
                з к след. тренировке) По просьбе все отфоткали, замерили, даже 
                отговорили на другой размер, чему очень рад. Качество отличное. 
                Покупкой доволен.
            </div>
        </div>
    </div>
    )
}