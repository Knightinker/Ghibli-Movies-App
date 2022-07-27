 
import './App.css';
import React , {useState, useEffect, useReducer} from 'react';
import AllFilms from './Components/AllFilms';
import MovieDetails from './Components/MovieDetails'
import MovieOrder from './Components/MovieOrder';
import Cart from './Components/Cart';

function App() {

  const [films, setFilmList] = useState([]); //array to store films from api
  const [details, setDetails] = useState([]); //store the data that you want to view details
  const [cart, setCart] = useState([]); // movies inside cart
  const [checkout, confirmCheckout] = useReducer((checked) => !checked, false); //checkbox

  function ViewDetails(data) // view details of selected movie
  {
    setDetails([data]);
    document.getElementById('displayFilms').classList.add('hideComponent'); //hide all films
    document.getElementById('selectedFilm').classList.remove('hideComponent'); //show the details of selected movie
  }

  function forOrder(data) //add data to cart
  {
    if(cart.includes(data)===false) //checks if movie is already in cart
    {
      setCart(cart.concat([data])); //add ordered data to cart
      document.getElementById('displayFilms').classList.remove('hideComponent');
      document.getElementById('selectedFilm').classList.add('hideComponent'); 
    }else{
      alert (data.title + ' is already present in cart');
    }
    
  }
  
  function cart_link ()
  { //hide and view components when cart is clicked
    document.getElementById('displayFilms').classList.add('hideComponent'); 
    document.getElementById('selectedFilm').classList.add('hideComponent'); 
    document.getElementById('movieOrder').classList.remove('hideComponent'); 
    document.getElementById('movieForm').classList.remove('hideComponent'); 
  }
  
  function home_link () //hide and view components when home is clicked
  { 
    document.getElementById('displayFilms').classList.remove('hideComponent'); 
    document.getElementById('selectedFilm').classList.add('hideComponent'); 
    document.getElementById('movieOrder').classList.add('hideComponent'); 
    document.getElementById('movieForm').classList.add('hideComponent'); 
  }

  function remove(delete_id)
  {
    cart.map(data => setCart(cart.filter(data => data.id !== delete_id))); //delete selected movie
  }

  //fetching data from api
  useEffect(() => 
  {
      fetch ('https://ghibliapi.herokuapp.com/films')
      .then((response) => response.json())
      .then((data) =>
      {
        setFilmList(data);
        console.log(data)
      });
  }, [])


  // getting the value and index of the fetched data
  const allFilms = films.map((movie, index) => (<AllFilms key={index} data = {movie} ViewDetails ={ViewDetails}/>)); 
  const view_details = details.map((movie,index) => (<MovieDetails key = {index} data={movie}  forOrder={forOrder} />));
  const view_cart = cart.map((movie, index)  => (<Cart key = {index} data={movie} remove={remove}  />));




  return (
    <div>
            
          <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
            <div className="container-fluid">
               <a className="navbar-brand" href="#">  <i className="bi bi-camera-reels whiteText "></i> Ghibli Movies</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon App-logo"></span>
                  </button>

              <div className="collapse navbar-collapse" id="navbarsExample02">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <a className="nav-link mouse-pointer" aria-current="page" onClick={home_link}> Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mouse-pointer" onClick={cart_link}>Cart {cart.length}</a>
                    </li>
                  </ul>          
              </div>
            </div>
          </nav>


          <div className='container' id='selectedFilm'>
            {view_details}
          </div>

          <div className='center-wrap' id='displayFilms'>
            {allFilms}
          </div>


          <div className='container hideComponent' id='movieOrder'>
            <h3 className='mt-5'>Selected Movies</h3>
            <hr></hr>
              <div className="list-group w-auto mb-3">
                {view_cart}
              </div>
          </div>
                


          <div className='hideComponent container' id='movieForm'>                              
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="finalCheck" value = {checkout} onChange={confirmCheckout}/>
              <label className="form-check-label" for="finalCheck">{checkout ? "Order Confirmed" : "Waiting for Checkout"}</label>
            </div>
        
                <MovieOrder isConfirmed={checkout} setConfirm={confirmCheckout}  totalOrdered={cart}/>
          </div>


                <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
            </div>      
          </footer>

        </div>
        
    </div>
  );
}

export default App;
