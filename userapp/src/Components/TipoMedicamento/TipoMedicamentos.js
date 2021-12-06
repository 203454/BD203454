import React, {Fragment, useState, useEffect} from 'react';
import TMList from './TMList';
import FormTipoMedicamento from './FormTipoMedicamento'


function Productos(){

    const [datoEditar, setDatoEditar]=useState(null);


    const [tipoMedicamento, setTipoMedicamento] = useState({
        tipoMedicamentoId: null,
        nombre: '',
        descripcion: ''
      })

      const [listUpdated, setListUpdated] = useState(false)
      const [tipoMedicamentos, setTipoMedicamentos] = useState([])

      useEffect(() => {
        const getTipoMedicamentos = () => {
          fetch('http://localhost:')
          .then(res => res.json())
          .then(res => setTipoMedicamentos(res))
        }
        getTipoMedicamentos();
        setListUpdated(false)
      }, [listUpdated])


      

      return (
       
       
          <div className="container">
              <Fragment> 
            <div className="row">
              <div className="col-7">
                <h2 style={{textAlign: 'center'}}>TIPO MEDICAMENTO LIST</h2>
                <TMList  tipoMedicamento={tipoMedicamento} tipoMedicamentos={tipoMedicamentos} setListUpdated={setListUpdated} />
              </div>
              <div className="col-5">
                <h2 style={{textAlign: 'center'}}>TIPO MEDICAMENTO FORM</h2>
                <FormTipoMedicamento  tipoMedicamento={tipoMedicamento} setTipoMedicamento={setTipoMedicamento}/>
              </div>
    
            </div>
            </Fragment> 
          </div>
      
      );
    
}

export default Productos;