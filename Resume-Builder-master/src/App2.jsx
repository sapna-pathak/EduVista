import React from 'react'
import {Routes, Route ,Navigate} from 'react-router-dom';
import DetailsFillingPage from './Components/DetailsFillComponents/DetailsFillingPage.jsx';
import Home from './Components/HomePage/Home.jsx'
import MyResume from './Components/ResumeDisplay/MyResume.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import './App.css';
import NavBar from './Components/Navigation/Navbar.jsx';

// This component defines routing for other components 
// Home page displays the different templates from which user can select either of them.
//'detailsfillingpage' displays the detailsfillingpage inside which there are nested routes to display personalinfo, workexperience, education and keyskills page.
//'myresume' displays the resume created by the user. 
//'about' displays the AboutUs page of the app.
function App2() {
  return (
    <div>
        <div> 
          <NavBar/>
        </div>
        
        <div>
            <Routes>
                  <Route exact path="/" element={<Home/>}></Route>
                  <Route path="/detailsfillingpage/*" element ={<DetailsFillingPage />}></Route> 
                  <Route path="/myresume" element={<MyResume/>}></Route>
                  <Route exact path="/about" element={<AboutUs/>}></Route>
                  <Route path="*" element={<Navigate to="/about" />}></Route>
            </Routes> 
        </div>
    </div>
  )
}


export default App2


