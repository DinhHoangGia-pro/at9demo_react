import logo from './logo.svg';
import './App.css';

import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";


const App=()=> {
  

  return (
  
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home/>} />
                    
         
        </Route>
      </Routes>
    </BrowserRouter>
  );

  // return (

  //   <Home/>
  // );


}

export default App;
