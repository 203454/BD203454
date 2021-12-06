
import React, {Fragment, useState, useEffect} from 'react';
import CitaList from './CitaList';
import FormCita from './FormCita'


function Citas(){

    const [datoEditar, setDatoEditar]=useState(null);


    const [cita, setCita] = useState({
        idCita:null,
        hora: '',
        fecha: '',
        tipoServicio: null,
        idMascota:null
        
      })

      const [listUpdated, setListUpdated] = useState(false)
      const [citas, setCitas] = useState([])

      useEffect(() => {
        const getCitas = () => {
          fetch('http://localhost:18086/')
          .then(res => res.json())
          .then(res => setCitas(res))
        }
        getCitas();
        setListUpdated(false)
      }, [listUpdated])


      

      return (
       
       
          <div className="container">
              <Fragment> 
            <div className="row">
              <div className="col-7">
                <h2 style={{textAlign: 'center'}}>CITA List</h2>
                <CitaList  cita={cita} citas={citas} setListUpdated={setListUpdated} />
              </div>
              <div className="col-5">
                <h2 style={{textAlign: 'center'}}>CITA form</h2>
                <FormCita  cita={cita} setCita={setCita}/>
              </div>
    
            </div>
            </Fragment> 
          </div>
      
      );
    
}

export default Citas;