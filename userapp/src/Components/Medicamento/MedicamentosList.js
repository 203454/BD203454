
import React, {Fragment, useState, useEffect} from 'react';
import FormMedicamento from './FormMedicamento';

const MedicamentosList = ({medicamento, medicamentos, setListUpdated}) =>{

    const handleDelete= medicamentoId =>{
        const requestInit = {
            method: 'POST', 
        }
        fetch('http://localhost:18083/Medicamento/delete/' + medicamentoId, requestInit)
        .then(res => res.text())
        .then(res => console.log(res + medicamentoId))

        setListUpdated(true)
        }

        const handleUpdate = id =>{

            medicamento.medicamentoId = id;
            
            const requestInit = {
               
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(medicamento)
            }
            console.log("MECDICAMENTO: " + requestInit.body)
            fetch('http://localhost:18083/Medicamento/update/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log("FETCH: " + res))
    
            setListUpdated(true)    
        }

     
        const [tipoMedicamentos, setTipoMedicamentos] = useState([])

 
      
      
        useEffect(() => {
            const getTipoMedicamentos = () => {
              fetch('http://localhost:18084/listTiposMedicamentos')
              .then(res => res.json())
              .then(res => setTipoMedicamentos(res))
            }
            getTipoMedicamentos();
            setListUpdated(false)
          },[])
        
        

    return(
        <table class="table table-bordered">
 
            <thead>
                <tr>
                    <th  cope="col">ID </th>
                    <th  cope="col">NAME</th>
                    <th  cope="col">CADUCA</th>
                    <th  cope="col">S.A</th>
                    <th  cope="col">TIPO</th>
                    <th  cope="col">INFO</th>
                </tr>
            </thead>
            <tbody>
                    {medicamentos.map( medicamento => (
                        <tr cope="row" key={medicamento.medicamentoId}>
                           <td>{medicamento.medicamentoId}</td>
                           <td>{medicamento.nombre}</td>
                           <td>{medicamento.fechaCaducidad}</td>
                           <td>{medicamento.sustanciaActiva}</td>
                           <td>{medicamento.tipoMedicamentoId}</td>
                            <td>{
                           
                            //producto.tipoId === duenio.id_duenio ? (

                            tipoMedicamentos.map(e =>(

                                medicamento.tipoMedicamentoId === e.tipoMedicamentoId ? (
                                
                                <ol key={e.tipoMedicamentoId}>
                                    <li>{e.tipoMedicamentoId}</li>
                                    <li>{e.nombre}</li>
                                    <li>{e.descripcion}</li>
                                </ol>  
                                 )
                                :(
                            <td></td>
                                )

                             )
                             )
                        
                           }
                           </td>                           
                           <td>
                               <div className="mb-3">
                                <button onClick={() => handleDelete(medicamento.medicamentoId)} className="btn btn-danger">ELIMINAR</button>
                               </div>

                               <div className="mb-3">   
                                <button onClick={() => handleUpdate(medicamento.medicamentoId)} className="btn btn-warning">EDITAR</button>
                               </div>
                           </td>
                           
                        </tr>
                    )
                    )}
            </tbody>
        </table>
        )
}
export default MedicamentosList;