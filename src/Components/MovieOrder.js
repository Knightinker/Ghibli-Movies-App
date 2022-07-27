import React, {useRef} from 'react'

function MovieOrder({isConfirmed, setConfirm, totalOrdered}) {
  const customerName = useRef();
  const favoriteColor = useRef();
  const age = useRef();

  const confirmOrder = (e) =>
   {
      e.preventDefault();
        if (isConfirmed === true)
       {
        alert(
          "Movie Order successfully placed"
        );
        customerName.current.value ='' ; // resetting field after submission 
        favoriteColor.current.value ='';
        age.current.value ='';
    
        document.getElementById('movieOrder').classList.add('hideComponent');
      // document.getElementById('movieOrder').classList.remove('hideComponent'); UNHIDE

      document.getElementById('finalCheck').checked=false;
      setConfirm(false);
      totalOrdered.length=0; //array set to empty after submission

      document.getElementById('displayFilms').classList.remove('hideComponent'); 
      document.getElementById('movieOrder').classList.add('hideComponent'); 
      document.getElementById('movieForm').classList.add('hideComponent'); 

     
      }
      if (isConfirmed === false){
        alert("Please confirm order")
    }
    
  }
  return (
   <>
    
        <form className="" onSubmit={confirmOrder}>
          {/* required ref to ensure that fields must have value int it */}
                      <div className="mb-3">
              <label for="name" className="form-label" >Full Name</label>
              <input type="text" className="form-control" id="name" required ref={customerName}/>
            </div>
              
            <div className="mb-3">
              <label for="color" className="form-label" >Favorite Color</label>
              <input type="text" className="form-control" id="color" required ref={favoriteColor}/>
            </div>

            <div className="mb-3">
              <label for="age" className="form-label" >Age</label>
              <input type="text" className="form-control" id="age" required ref={age}/>
            </div>
          
          
              <button className="btn btn-primary"> Submit </button>

          </form>

     
   </>
  )
}

export default MovieOrder