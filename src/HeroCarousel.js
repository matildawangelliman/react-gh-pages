import useFetch from './functions/useFetch';
import HeroImage from './HeroImage';
import './HeroCarousel.css';

function HeroCarousel() {
     const { apiData, serverError } = useFetch('https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge');
     console.log(apiData)
     const heroCarousel = [];
     if (apiData) {
        for (let i = 0; i < apiData['hero_slides'].length; i++) {
            heroCarousel.push(<HeroImage key={i} url={apiData['hero_slides'][i]['image']} alt={apiData['hero_slides'][i]['alt']} text={apiData['hero_text']}/>)
        }

     }
    //  console.log("array",heroCarousel)

      
    return (
        <div>
            {/* handle loading and displaying images */}
            { apiData ? heroCarousel : <h1 className ="laoding-and-error"> Loading.. </h1>}
            {/* handle the erro if occured */}
            { serverError && <h1 className ="laoding-and-error">Oops, sorry something went wrong..</h1> }
        </div>
    )
}

export default HeroCarousel
