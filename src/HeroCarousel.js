import useFetch from './functions/useFetch';
import Carousel, { CarouselItem } from "./Carousel";
import './Carousel.css'


function HeroCarousel() {
    const { apiData, serverError } = useFetch('https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge');
    const heroCarousel = {};
    const heroText = [];
    if (apiData) {
        for (const ele of apiData['hero_slides']) {
            if (!heroCarousel[ele["alt"]]) {
                heroCarousel[ele["alt"]] = ele["image"];
            }
        }
        heroText.push(apiData['hero_text']);
    }

    return (
        <div className="hero">
            {/* handle loading and displaying images */}
            { !apiData && <h1 className ="laoding-and-error">Loading Images..</h1> }
            {/* handle the erro if occured */}
            { serverError && <h1 className ="laoding-and-error">Oops, sorry something went wrong..</h1> }
             
            <Carousel>
            { Object.entries(heroCarousel).map((ele,i) => <CarouselItem id="image-size" key={i}> <img alt={ele[0]} src={ele[1]}/></CarouselItem>) } 
            {/* <CarouselItem > <img alt="hi" src={Image1}/></CarouselItem>
            <CarouselItem > <img alt="hi" src={Image2}/></CarouselItem>
            <CarouselItem > <img alt="hi" src={Image3}/></CarouselItem> */}
            </Carousel>

            { apiData && 
            <div className="Hero-text">
                <div id="title">{heroText[0]['title']}</div> <br/> 
                <div id="date">{heroText[0]['date']}</div> <br/> 
                <div id="subtitle">{heroText[0]['subtitle']} </div>
            </div> 
            }           
        </div>
    )
}

export default HeroCarousel;
