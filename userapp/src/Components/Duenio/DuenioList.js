
import React, {Fragment, useState, useEffect} from 'react';
import FormDuenio from './FormDuenio';

const DuenioList = ({duenio, duenios, setListUpdated}) =>{

    const handleDelete = duenioId =>{
        const requestInit = {
            method: 'POST', 
        }
        fetch('http://localhost:18082/Duenio/delete/' + duenioId, requestInit)
        .then(res => res.text())
        .then(res => console.log(res + duenioId))

        setListUpdated(true)
        }

        const handleUpdate = id =>{

            duenio.duenioId = id;
            
            const requestInit = {
               
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(duenio)
            }
            console.log("DUENIO: " + requestInit.body)
            fetch('http://localhost:18082/Duenio/update/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log("FETCH: " + res))
    
            setListUpdated(true)    
        }

     
        const [mascotas, setMascotas] = useState([])

 
      
      
        useEffect(() => {
            const getMascotas = () => {
              fetch('http://localhost:18081/listMascotas')
              .then(res => res.json())
              .then(res => setMascotas(res))
            }
            getMascotas();
            setListUpdated(false)
          },[])
        
        

    return(
        <table className="table" class="table table-bordered">
 
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>TELEFONO</th>
                    <th>DIRECCION</th>
                    <th>MASCOTAS</th>
                </tr>
            </thead>
            <tbody>
                    {duenios.map( duenio => (
                        <tr key={duenio.duenioId}>
                           <td>{duenio.duenioId}</td>
                           <td>{duenio.nombre}</td>
                           <td>{duenio.telefono}</td>
                           <td>{duenio.direccion}</td>
                           <td>{
                               
                           
                        //    producto.tipoId === duenio.id_duenio ? (

                            mascotas.map(e =>(

                                duenio.duenioId === e.duenioId ? (
                                
                                <ul key={e.duenioId}>
                                    {/* <li>{e.duenioId}</li>
                                    <li>{e.idmascota}</li> */}
                                    <li>{e.nombre}</li>
                                    {/* <li>{e.tipoId}</li>  */}
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
                                <button onClick={() => handleDelete(duenio.duenioId)} className="btn btn-danger">ELIMINAR</button>
                               </div>

                               <div className="mb-3">   
                                <button onClick={() => handleUpdate(duenio.duenioId)} className="btn btn-warning">EDITAR</button>
                               </div>
                           </td>
                           
                        </tr>
                    )
                    )}
            </tbody>
        </table>
        )
}
export default DuenioList;