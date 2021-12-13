import './MasonryLayout.css'

//remember to uninstall
import { addYears, formatWithOptions } from 'date-fns/fp'
import { eo } from 'date-fns/locale'

function MasonryCard({item}) {
   

    return (
        <div>
           <img alt={item.alt} src={item.image}/> <br/>
           <div className="date"> {item.date}  </div> <br/>
           <div className="title"> {item.title} </div> <br/>
           <div className="author-display"><span className="ref"><a id="author" href="/">{item.author}</a></span></div>
           <div className="line"></div>
           {/* A text where I need to <span class="ref">something</span> */}

        </div>
    )
}

export default MasonryCard
