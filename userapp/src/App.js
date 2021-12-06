
import React, {Fragment, useState, useEffect} from 'react';
import ProductoList from './Components/Productos/productoList';
import Navbar from './Components/Navbar';
import Form from './Components/Productos/Form'
import Citas from './Components/Cita/Citas';




function App() {


  return (

  
    <div> 
     
        <Navbar brand='PRODUCTOS APP'/> 
        <h2>CITAS</h2> 
        <Citas/>

        <p> ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
       
    
  </div>

   
  );
}

export default App;
