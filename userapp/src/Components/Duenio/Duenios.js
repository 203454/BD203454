
import React, {Fragment, useState, useEffect} from 'react';
import DuenioList from './DuenioList';
import FormDuenio from './FormDuenio'


function Duenios(){

    const [datoEditar, setDatoEditar]=useState(null);


    const [duenio, setDuenio] = useState({
        duenioId:null,
        nombre: '',
        telefono: null,
        direccion: null,
      })

      const [listUpdated, setListUpdated] = useState(false)
      const [duenios, setDuenios] = useState([])

      useEffect(() => {
        const getDuenios = () => {
          fetch('http://localhost:18082/listDuenios')
          .then(res => res.json())
          .then(res => setDuenios(res))
        }
        getDuenios();
        setListUpdated(false)
      }, [listUpdated])


      

      return (
       
       
          <div className="container" id="dueniosApp">
              <Fragment> 
            <div className="row">
              <div className="col-5">
                <h2 style={{textAlign: 'center'}}>DUENO LIST</h2>
                <DuenioList duenio={duenio} duenios={duenios} setListUpdated={setListUpdated} />
              </div>
              <div className="col-5">
                <h2 style={{textAlign: 'center'}}>FORMULARIO</h2>
                <FormDuenio  duenio={duenio} setDuenio={setDuenio}/>
              </div>
    
            </div>
            </Fragment> 
          </div>
      
      );
    
}

export default Duenios;