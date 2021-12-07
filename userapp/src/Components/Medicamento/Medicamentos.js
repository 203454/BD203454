
import React, {Fragment, useState, useEffect} from 'react';
import MedicamentosList from './MedicamentosList';
import FormMedicamento from './FormMedicamento'


function Medicamentos(){

    const [datoEditar, setDatoEditar] = useState(null);


    const [medicamento, setMedicamento] = useState({
        medicamentoId:null,
        nombre: '',
        fechaCaducidad: null,
        sustanciaActiva: '',
        tipoMedicamentoId:null
      })

      const [listUpdated, setListUpdated] = useState(false)
      const [medicamentos, setMedicamentos] = useState([])

      useEffect(() => {
        const getMedicamentos = () => {
          fetch('http://localhost:18083/listMedicamentos')
          .then(res => res.json())
          .then(res => setMedicamentos(res))
        }
        getMedicamentos();
        setListUpdated(false)
      }, [listUpdated])

      return (
       
       
          <div className="container" id="medicamentosApp">
              <Fragment> 
            <div className="row">

              <div className="col-7">
                <h2 style={{textAlign: 'center'}}>medicamento list</h2>
                <MedicamentosList medicamento={medicamento} medicamentos={medicamentos} setListUpdated={setListUpdated} />
              </div>

              <div className="col-5">
                <h2 style={{textAlign: 'center'}}>medicamento form</h2>
                <FormMedicamento medicamento={medicamento} setMedicamento={setMedicamento}/>
              </div>
    
            </div>
            </Fragment> 
          </div>
      
      );
    
}

export default Medicamentos;