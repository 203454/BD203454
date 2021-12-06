
import React, {Fragment, useState, useEffect} from 'react';
import MascotaList from './MascotaList';
import FormMascota from './FormMascota'


function Mascotas(){

    const [datoEditar, setDatoEditar]=useState(null);


    const [mascota, setMascota] = useState({
        mascotaId:null,
        nombre: '',
        duenioId: null,
        tipoId: null,
        fechaIngreso:'',
        motivoIngreso:''
      })

      const [listUpdated, setListUpdated] = useState(false)
      const [mascotas, setMascotas] = useState([])

      useEffect(() => {
        const getMascotas = () => {
          fetch('http://localhost:18081/listMascotas')
          .then(res => res.json())
          .then(res => setMascotas(res))
        }
        getMascotas();
        setListUpdated(false)
      }, [listUpdated])


      

      return (
       
       
          <div className="container">
              <Fragment> 
            <div className="row">
              <div className="col-7">
                <h2 style={{textAlign: 'center'}}>MASCOTA List</h2>
                <MascotaList  mascota={mascota} mascotas={mascotas} setListUpdated={setListUpdated} />
              </div>
              <div className="col-5">
                <h2 style={{textAlign: 'center'}}>MASCOTA form</h2>
                <FormMascota mascota={mascota} setMascota={setMascota}/>
              </div>
    
            </div>
            </Fragment> 
          </div>
      
      );
    
}

export default Mascotas;