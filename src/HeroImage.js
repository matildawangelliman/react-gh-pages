import './HeroCarousel.css';
import Carousel, { CarouselItem } from "./Carousel";

function HeroImages({url, alt, text}) {
    // ShowSlides()
    return (
        <>
        <div className="hero">
{/*  
            <Carousel>
            <CarouselItem><img alt={alt} src= {url} style={{width:"100%"}}></img></CarouselItem>
            <div className="Hero-text">
            <CarouselItem>{text.title}</CarouselItem>
            <h2>{text.date}</h2>
            <h3>{text.subtitle}</h3>
            </div>
        
            </Carousel> */}
        </div>

        </>
    )
}

export default HeroImages
