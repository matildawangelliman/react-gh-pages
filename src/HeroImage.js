import './HeroCarousel.css';

function HeroImages({url, alt, text}) {

    return (
        <div className="hero">
            <img alt={alt} src= {url} style={{width:"100%"}}></img>
            <div className="Hero-text">
            <h1>{text.title}</h1>
            <h2>{text.date}</h2>
            <h3>{text.subtitle}</h3>
            </div>
        </div>
    )
}

export default HeroImages
