
import React, {Fragment, useState, useEffect} from 'react';
import TipoMascotaList from './TipoMascotaList';
import FormTipoMascotafrom from './FormTipoMascotafrom'


function TipoMascotas(){

    const [datoEditar, setDatoEditar]=useState(null);


    const [tipoMascota, setTipoMascota] = useState({
        tipoId:null,
        nombre: '',
        descripcion:''
      })

      const [listUpdated, setListUpdated] = useState(false)
      const [tipoMascotas, setTipoMascotas] = useState([])

      useEffect(() => {
        const getTipoMascotas = () => {
          fetch('http://localhost:18085/listTiposMascotas')
          .then(res => res.json())
          .then(res => setTipoMascotas(res))
        }
        getTipoMascotas();
        setListUpdated(false)
      }, [listUpdated])


      

      return (
       
       
          <div className="container">
              <Fragment> 
            <div className="row">
              <div className="col-7">
                <h2 style={{textAlign: 'center'}}>Tipo Mascota List</h2>
                <TipoMascotaList  tipoMascota={tipoMascota} tipoMascotas={tipoMascotas} setListUpdated={setListUpdated} />
              </div>
              <div className="col-5">
                <h2 style={{textAlign: 'center'}}>Tipo Mascota form</h2>
                <FormTipoMascotafrom  tipoMascota={tipoMascota} setTipoMascota={setTipoMascota}/>
              </div>
    
            </div>
            </Fragment> 
          </div>
      
      );
    
}

export default TipoMascotas;