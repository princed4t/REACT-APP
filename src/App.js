import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Adduser from './Adduser';
import Viewuser from './Viewuser';
import View from './View';
import Deleteuser from './Deleteuser';

function App() {
  return (
    <div >
    <Router>
  <Navbar/>
  <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/adduser" element={<Adduser/>}/>
  <Route exact path="/edituser/:id" element={<Viewuser/>}/>
  <Route exact path="/viewperson/:id" element={<View/>}/>
  <Route exact path="/deletebyid/:id" element={<Deleteuser/>}/>



  </Routes>


    </Router>
  
    </div>
  );
}

export default App;
