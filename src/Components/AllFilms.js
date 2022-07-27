
function AllFilms({data, ViewDetails}) {
  return (
 <>

<div className="card rf-2 me-4 mt-5" >
  <img className="mouse-pointer" src={data.image} onClick={()  => ViewDetails(data)} alt="movie image"/>
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.release_date}</p>
    
  </div>
</div>


{/* 
<div className="imagelist">
  <img src={data.image} onClick={()  => ViewDetails(data)} alt="movie image"/>
</div> */}
</>
  )
}

export default AllFilms;