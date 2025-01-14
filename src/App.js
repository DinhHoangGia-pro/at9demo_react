import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import ListProducts from './ListProducts';


const App=()=> {
  

  return (
  
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index path="/Home1" element={<Home/>} />
          <Route index path="/" element={<ListProducts/>} />                    
         
        </Route>
      </Routes>
    </BrowserRouter>
  );

  // return (

  //   <ListProducts/>
  // );


}

export default App;
