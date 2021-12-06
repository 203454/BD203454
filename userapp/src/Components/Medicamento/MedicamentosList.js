
import React, {Fragment, useState, useEffect} from 'react';
import FormMedicamento from './FormMedicamento';

const MedicamentoList = ({medicamento, medicamentos, setListUpdated}) =>{

    const handleDelete= id_medicamento =>{
        const requestInit = {
            method: 'POST', 
        }
        fetch('http://localhost:18086/medicamento/delete/' + id_medicamento, requestInit)
        .then(res => res.text())
        .then(res => console.log(res + id_medicamento))

        setListUpdated(true)
        }

        const handleUpdate = id =>{

            medicamento.id_medicamento = id;
            
            const requestInit = {
               
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(medicamento)
            }
            console.log("DUENIO: " + requestInit.body)
            fetch('http://localhost:18086/medicamento/update/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log("FETCH: " + res))
    
            setListUpdated(true)    
        }

     
        const [medicamento, setMedicamentos] = useState([])

 
      
      
        useEffect(() => {
            const getMascotas = () => {
              fetch('http://localhost:18086/listMedicamentos')
              .then(res => res.json())
              .then(res => setMedicamentos(res))
            }
            getMedicamentos();
            setListUpdated(false)
          },[])
        
        

    return(
        <table className="table">
 
            <thead>
                <tr>
                    <th>ID MEDICAMENTO</th>
                    <th>NOMBRE</th>
                    <th>FECHA DE CADUCIDAD</th>
                    <th>SUSTANCIA ACTIVA</th>
                    <th>TIPO DE MEDICAMENTOS</th>
                </tr>
            </thead>
            <tbody>
                    {medicamentos.map( medicamento => (
                        <tr key={medicamento.id_medicamento}>
                           <td>{medicamento.id_medicamento}</td>
                           <td>{medicamento.nombre}</td>
                           <td>{medicamento.fechaCaducidad}</td>
                           <td>{medicamento.sustanciaActiva}</td>
                           <td>{medicamento.id_tipoMedicamentoId}</td>
                            <td>{
                           
                            //producto.tipoId === duenio.id_duenio ? (

                            tipoMedicamento.map(e =>(

                                medicamento.id_medicamento=== e.id_medicamento ? (
                                
                                <ol key={e.id_medicamento}>
                                    <li>{e.id_tipoMedicamentoId}</li>
                                    <li>{e.nombre}</li>
                                    <li>{e.descripcion}</li>
                                </ol>  
                                 )
                                :(
                            <td>Sin datos</td>
                                )

                             )
                             )
                        
                           }
                           </td>                           
                           <td>
                               <div className="mb-3">
                                <button onClick={() => handleDelete(medicamento.id_medicamento)} className="btn btn-danger">ELIMINAR</button>
                               </div>

                               <div className="mb-3">   
                                <button onClick={() => handleUpdate(medicamento.id_medicamento)} className="btn btn-dark">EDITAR</button>
                               </div>
                           </td>
                           
                        </tr>
                    )
                    )}
            </tbody>
        </table>
        )
}
export default MedicamentoList;