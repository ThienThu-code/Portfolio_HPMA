import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
//import Service from './Components/Service/Service'
//import Work from './Components/Work/Work'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Profile/>
        <About/>
        {/*<Service/>
        <Work/>*/}
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App