
import React, {Fragment, useState, useEffect} from 'react';
import ProductoList from './Components/Productos/productoList';
import Navbar from './Components/Navbar';
import Form from './Components/Productos/Form';
import Citas from './Components/Cita/Citas';
import Mascotas from './Components/Mascota/Mascotas';
import Duenios from './Components/Duenio/Duenios';
import Medicamentos from './Components/Medicamento/Medicamentos';
import TipoMascotas from './Components/TipoMascota/TipoMascotas';
import TipoMedicamentos from './Components/TipoMedicamento/TipoMedicamentos';


function App() {


  return (

  
    <div> 
     
        <ul class="nav justify-content-center">

            
        <li class="nav-item">
          <a class="nav-link" href="#citasApp">Cita</a>
        </li>
      
        <li class="nav-item">
          <a class="nav-link" href="#dueniosApp">Duenio</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href='#mascotasApp'>Mascota</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#medicamentosApp">Medicamento</a>
        </li>
        
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#tipoMascotasApp">Tipo Mascota</a>
        </li>

        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#tipoMedicamentosApp"> Tipo Medicamento</a>
        </li>
      
      
</ul>

        
       <Citas/>
       <Mascotas/>
       <Duenios/>
       <Medicamentos/>
       <TipoMascotas/>
       <TipoMedicamentos/>

        <p> ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
       
    
  </div>

   
  );
}

export default App;
