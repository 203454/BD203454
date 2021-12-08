
import React, {Fragment, useState, useEffect} from 'react';
import FormTipoMedicamento from './FormTipoMedicamento';

const TMList = ({tipoMedicamento, tipoMedicamentos, setListUpdated}) =>{

    const handleDelete= tipoMedicamentoId =>{
        const requestInit = {
            method: 'POST', 
        }
        fetch('http://localhost:18084/TipoMedicamento/delete/' + tipoMedicamentoId, requestInit)
        .then(res => res.text())
        .then(res => console.log(res + tipoMedicamentoId))

        setListUpdated(true)
        }

        const handleUpdate = id =>{

            tipoMedicamento.tipoMedicamentoId = id;
            
            const requestInit = {
               
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(tipoMedicamento)
            }
            console.log("PRODUCTO: " + requestInit.body)
            fetch('http://localhost:18084/TipoMedicamento/update/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log("FETCH: " + res))
    
            setListUpdated(true)    
        }

     
        const [medicamentos, setMedicamentos] = useState([])

        useEffect(() => {
          const getMedicamentos = () => {
            fetch('http://localhost:18083/listMedicamentos')
            .then(res => res.json())
            .then(res => setMedicamentos(res))
          }
          getMedicamentos();
          setListUpdated(false)
        },[])
        
        

    return(
        <table className="table" class="table table-bordered">
 
            <thead>
                <tr>
                    <th>TIPO MEDICAMENTO ID</th>
                    <th>NOMBRE</th>
                    <th>DESCRIPCION</th>
                    <th>MEDICAMENTOS</th>
                </tr>
            </thead>
            <tbody>
                    {tipoMedicamentos.map( tipoMedicamento => (
                        <tr key={tipoMedicamento.tipoMedicamentoId}>
                            <td>{tipoMedicamento.tipoMedicamentoId}</td>
                           <td>{tipoMedicamento.nombre}</td>
                           <td>{tipoMedicamento.descripcion}</td>
                           <td>{
                               
                           
                        //    producto.tipoId === duenio.id_duenio ? (

                            medicamentos.map(e =>(

                                tipoMedicamento.tipoMedicamentoId === e.tipoMedicamentoId ? (
                                
                                <ul key={e.medicamentoId}>
                                    {/* <li>{e.medicamentoId}</li> */}
                                    <li>{e.nombre}</li>
                                    {/* <li>{e.descripcion}</li>  */}
                                    {/* <li>{console.log("Producto id: " + producto.tipoId +" ---- Duenio nombre:"+  e.nombre)}</li> */}
                                </ul>  
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
                                <button onClick={() => handleDelete(tipoMedicamento.tipoMedicamentoId)} className="btn btn-danger">ELIMINAR</button>
                               </div>

                               <div className="mb-3">   
                                <button onClick={() => handleUpdate(tipoMedicamento.tipoMedicamentoId)} className="btn btn-warning">EDITAR</button>
                               </div>
                           </td>
                           
                        </tr>
                    )
                    )}
            </tbody>
        </table>
        )
}
export default TMList;