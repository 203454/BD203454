
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
     
  <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
      <button class="nav-link" id="nav-cita-tab" data-bs-toggle="tab" data-bs-target="#nav-cita" type="button" role="tab" aria-controls="nav-cita" aria-selected="false">Cita</button>
      <button class="nav-link" id="nav-mascota-tab" data-bs-toggle="tab" data-bs-target="#nav-mascota" type="button" role="tab" aria-controls="nav-mascota" aria-selected="false">Mascota</button>
      <button class="nav-link" id="nav-tipomascota-tab" data-bs-toggle="tab" data-bs-target="#nav-tipomascota" type="button" role="tab" aria-controls="nav-tipomascota" aria-selected="false">Tipo Mascota</button>
      <button class="nav-link" id="nav-duenio-tab" data-bs-toggle="tab" data-bs-target="#nav-duenio" type="button" role="tab" aria-controls="nav-duenio" aria-selected="false">Duenio</button>
      <button class="nav-link" id="nav-medicamento-tab" data-bs-toggle="tab" data-bs-target="#nav-medicamento" type="button" role="tab" aria-controls="nav-tipomascota" aria-selected="false">Medicamento</button>
      <button class="nav-link" id="nav-tipomedicamento-tab" data-bs-toggle="tab" data-bs-target="#nav-tipomedicamento" type="button" role="tab" aria-controls="nav-tipomedicamento" aria-selected="false">Tipo Medicamento</button>
    </div>
  </nav>

  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"> <h1>VETERINARIA INFO</h1> </div>
    <div class="tab-pane fade" id="nav-cita" role="tabpanel" aria-labelledby="nav-cita-tab"><Citas/></div>
    <div class="tab-pane fade" id="nav-mascota" role="tabpanel" aria-labelledby="nav-mascota-tab"> <Mascotas/> </div>
    <div class="tab-pane fade" id="nav-duenio" role="tabpanel" aria-labelledby="nav-duenio-tab"> <Duenios/> </div>
    <div class="tab-pane fade" id="nav-medicamento" role="tabpanel" aria-labelledby="nav-medicamento-tab"> <Medicamentos/> </div>
    <div class="tab-pane fade" id="nav-tipomascota" role="tabpanel" aria-labelledby="nav-medicamento-tab"> <TipoMascotas/> </div>
    <div class="tab-pane fade" id="nav-tipomedicamento" role="tabpanel" aria-labelledby="nav-tipomedicamento-tab"> <TipoMedicamentos/> </div>
  </div>
        
      
  
     
     
     

        <p> ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
       
    
  </div>

   
  );
}

export default App;
