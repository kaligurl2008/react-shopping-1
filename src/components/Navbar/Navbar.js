import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar(props) {
  //create state to hold textbox input
  const[navSearchInput, setNavSearchInput] = React.useState("");

  const handleSearchSubmission = (event) => {
    event.preventDefault(); //to stop page refresh
    console.log("now I can send search input to app");
    console.log(navSearchInput);
    //this needs to be sent to app by "lifting state"
    props.handleProductSearch(navSearchInput);
  }

  //handle navbar input
  function handleNavBarInput(searchInput){
    if (searchInput != ""){
      //call the function to pass to the app
      setNavSearchInput(searchInput);
    }
    else{
      console.log("empty textbox");
      setNavSearchInput(searchInput);
      //call the app function
      props.handleProductSearch("");
    }
  }

  return (
    <div className='navbar'>
        <Link to='/'>Homepage</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/detail'>Product Detail</Link>
        
        <form onSubmit= {handleSearchSubmission}>
          <input type="text" 
                 placeholder="search for products"
                 value = {navSearchInput}
                 onChange = {(event) => handleNavBarInput(event.target.value)} />
                 {/*onChange = {(event) => setNavSearchInput(event.target.value)} />*/}
          <button>Submit Search</button>
        </form>
    </div>
  )
}

export default Navbar