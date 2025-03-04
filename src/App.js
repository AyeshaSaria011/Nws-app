import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SinglePage from "./components/singlepage/SinglePage"
import Culture from "./components/culture/Culture"
const App = () => {
  return (
    <>
      <Router>
        <Header />
       <Routes>
          <Route exact path='/' component={Homepages} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route exact path='/culture' component={Culture} />
        </Routes>        
        <Footer />
        </Router>
    </> 
  )
}

export default App