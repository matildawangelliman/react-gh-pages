function MasonryCard({item}) {
    return (
        <div>
           <img className="pics" alt={item.alt} src={item.image}/> <br/>
           <div className="date"> {item.date}  </div> <br/>
           <div className="title"> {item.title} </div> <br/>
           <div className="author-display"><span className="ref"><a id="author" href="https://matildawangelliman.github.io/react-gh-pages/">{item.author}</a></span></div>
           <div className="line"></div>
        </div>
    )
}

export default MasonryCard
