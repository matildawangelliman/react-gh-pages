// import useFetch from './functions/useFetch';
import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css'
import './MasonryContainer.css'
import MasonryCard from './MasonryCard'

function MasonryLayout() {
    // const { apiData, serverError } = useFetch('https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge');
    // let sorted;
    // if (apiData) {
    //     sorted = apiData.cards.sort(function(a,b){
    //     // Turn your strings into dates, and then subtract them
    //     // to get a value that is either negative, positive, or zero.
    //     return new Date(b.date) - new Date(a.date);
    //   });
    // }
  // console.log(sorted)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ masonry, setMasonry ] = useState([])
    useEffect(()=>{
        fetch('https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge')
        .then(res => res.json())
        .then((data) => {
            console.log("beforesort",data.cards)
            data.cards.sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.date) - new Date(a.date);
              });
             setMasonry(data.cards)
             setIsLoading(false)   
        })
        .catch(console.log)
  },[])

  console.log("here",masonry)
 


  
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

        {/* { isLoading ? <h1> loading </h1> : 
          
          <div key={masonry.date}> {masonry.map(item => {
          return  (
          <div key={item.date}>
             <img alt={item.alt}src={item.image}/> <br/>
           <h5 id="date"> {item.date} </h5> <br/>
           <h1 id="title"> {item.title} </h1> <br/>
           <h4 id="author"> Presented by {item.author} </h4>
          </div> 
          )
          })}</div>
        
          } */}
          
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
