import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css'
import './MasonryContainer.css'
import MasonryCard from './MasonryCard'

function MasonryLayout() {
    const [ masonry, setMasonry ] = useState([])
    useEffect(()=>{
        fetch('https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge')
        .then(res => res.json())
        .then((data) => {
            data.cards.sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.date) - new Date(a.date);
              });
             setMasonry(data.cards);
        })
        .catch(console.log)
  },[])

  
  const myBreakpointsAndCols = {
    default: 3,
    1024: 2,
    700:1,
    480:1,
    420:1,
    320:1,
  };

    return (
        <div className="container">
        <Masonry breakpointCols={myBreakpointsAndCols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {masonry.map(item => (
            <div className="item" key={item.image}>
            <MasonryCard item={item}  />
            </div>
        ))}
        </Masonry>
        </div>
    )
}

export default MasonryLayout
