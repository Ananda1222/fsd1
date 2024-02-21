import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Signup from './components/Signup';
import UseEffect from './components/UseEffect';
import { Route,Routes } from 'react-router-dom';
import Mapping from './components/Mapping';
import Listmap from './components/Listmap';
import Api from './components/Api';
import GridGet from './components/GridGet';
function App() {
  return (
    <div className="App">

    <Navbar/>
   
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path="/sign" element={<Signup/>}/>
      <Route path="/state" element={<StateBasics/>}/>   
      <Route path='/c' element={<Counter/>}/> 
      <Route path='/t' element={<Mapping/>}/>
      <Route path='/l' element={<Listmap/>}/>
      <Route path='/a' element={<Api/>}/>
      <Route path='/g' element={<GridGet/>}/>
      </Routes>
     </div>
  );
}

export default App;