import React from 'react';
import './App.css';
import Cards from './Cards';

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    // Fetch data from https://reqres.in/api/users?page=1
    fetch('https://reqres.in/api/users?page=1 ')
      .then((response) => response.json())
      .then((res) => {
        //  console.log(isDateLoaded);
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* Navbar Start */}
      <section className='cont img'>
    
        <nav className='navbar navbar-expand-lg navbar-light na'>
          <div className='container-fluid nae'>
            <span className='logo'>LET'S GROWMORE</span>
                <button className='btn' onClick={handleClick}>
                  Get Users
                </button>
          </div>
        </nav>
        {/* Navbar End */}

        <div className='container  '>
        
          <div className='row justify-content-center '>
            {isButtonClick ? (
              isDateLoaded ? (
                <Cards userData={userData} />
              ) : (
                <div className='col-4 mt-5'>
                  <span className='loader'></span>
                </div>
              )
            ) : (
              <div className='col-6  col-sm-8 ins '>
                Click on Get Users button to get users data
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;