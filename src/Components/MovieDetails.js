import React from 'react'


function MovieDetails({data, forOrder}) {
  return (
    // movie banner

    <>
         <div className="card mb-3 mt-5">
            <img src={data.movie_banner} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"><b> {data.title} </b></h5>
              <p className="card-text">{data.description}</p>
              <p className="card-text"><b>Release Date: </b>{data.release_date}</p>
              <p className="card-text"><b>Director: </b>{data.director}</p>
              <p className="card-text"><b>Producer: </b>{data.producer}</p> 
              <p className="card-text"><b>Running time: </b>{data.running_time} min</p>
              <button className="btn btn-primary" onClick={() => forOrder(data) }> Order</button>
            </div>
            
          </div>



         
    </>
  )
}

export default MovieDetails