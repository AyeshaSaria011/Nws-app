import logo from './logo.svg';
import './App.css';
import Home from './components/Home' ;
import Header from './components/Header';
import Entertainment from './components/Entertainment';
import Sports from './components/Sports';
import Tech from './components/Tech';
import World from './components/World';
import Politics from './components/Politics';
import India from './components/India';
import Education from './components/Education';
import Business from './components/Business'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
   <>
<Header/>
<Routes>
  <Route exact path="/" element={<Home />} />
  <Route exact path="/Entertainment" element= {<Entertainment/>}/>
  <Route exact path="/Sports" element= { <Sports/>}/>
  <Route exact path="/Tech" element= {<Tech/>}/>
  <Route exact path="/World " element= {<World/>}/>
  <Route exact path="/Politics" element= {<Politics/>} />
  <Route exact path="/India" element= {<India/>}/>
  <Route exact path="/Education" element= {<Education/>}/>
  <Route exact path="/Business" element= {<Business/>}/>
</Routes>
      {/* <Home/> 
<Entertainment/>
<Sports/> */}
    </>
  );
}

export default App;
