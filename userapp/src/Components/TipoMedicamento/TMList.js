
import React, {Fragment, useState, useEffect} from 'react';
import FormTipoMedicamento from './FormTipoMedicamento';

const TMList = ({tipoMedicamento, tipoMedicamentos, setListUpdated}) =>{

    const handleDelete= tipoMedicamentoId =>{
        const requestInit = {
            method: 'POST', 
        }
        fetch('http://localhost:8021/Producto/delete/' + tipoMedicamentoId, requestInit)
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
            fetch('link dde la api' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log("FETCH: " + res))
    
            setListUpdated(true)    
        }

     
        const [medicamento, setMedicamento] = useState([])

        useEffect(() => {
          const getDuenios = () => {
            fetch('http://localhost:8085/listDuenios')
            .then(res => res.json())
            .then(res => setMedicamento(res))
          }
          getDuenios();
          setListUpdated(false)
        },[])
        
        

    return(
        <table className="table">
 
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
                           <td>{tipoMedicamento.nombre}</td>
                           <td>{tipoMedicamento.descripcion}</td>
                           <td>{
                               
                           
                        //    producto.tipoId === duenio.id_duenio ? (

                            medicamento.map(e =>(

                                medicamento.id_medicamento === e.tipoMedicamentoId ? (
                                
                                <ol key={e.tipoMedicamentoId}>
                                    <li>{e.tipoMedicamentoId}</li>
                                    <li>{e.nombre}</li>
                                    <li>{e.descripcion}</li> 
                                    {/* <li>{console.log("Producto id: " + producto.tipoId +" ---- Duenio nombre:"+  e.nombre)}</li> */}
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
                                <button onClick={() => handleDelete(tipoMedicamento.tipoMedicamentoId)} className="btn btn-danger">ELIMINAR</button>
                               </div>

                               <div className="mb-3">   
                                <button onClick={() => handleUpdate(tipoMedicamento.tipoMedicamentoId)} className="btn btn-dark">EDITAR</button>
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