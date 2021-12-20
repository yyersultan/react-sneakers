import ImageSlider from 'react-simple-image-slider';
import './Slider.css';

const images = [
    {url : 'https://wallpapercave.com/wp/wp3631175.jpg'},
    {url : 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'},
    {url : 'https://coolwallpapers.me/picsup/3101295-athlete_jordans_jumpman_kicks_nike_shoes_sidewalk_sneakers_socks_sports_street.jpg'},
    {url : 'https://wallpapercave.com/wp/wp6430517.jpg'}
]

export const Slider = ():JSX.Element => {
    return (
        <div className = 'slider'>
            <ImageSlider 
                width = {1700}
                height = {600}
                images = {images}
                showBullets= {true}
                showNavs = {true}
                autoPlay = {true}
                autoPlayDelay = {5}
                />
        </div>
    )
}