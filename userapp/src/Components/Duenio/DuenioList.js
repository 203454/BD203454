
import React, {Fragment, useState, useEffect} from 'react';
import FormDuenio from './FormDuenio';

const DuenioList = ({duenio, duenios, setListUpdated}) =>{

    const handleDelete= id_duenio =>{
        const requestInit = {
            method: 'POST', 
        }
        fetch('http://localhost:18086/duenio/delete/' + id_duenio, requestInit)
        .then(res => res.text())
        .then(res => console.log(res + id_duenio))

        setListUpdated(true)
        }

        const handleUpdate = id =>{

            duenio.id_duenio = id;
            
            const requestInit = {
               
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(duenio)
            }
            console.log("DUENIO: " + requestInit.body)
            fetch('http://localhost:18086/duenio/update/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log("FETCH: " + res))
    
            setListUpdated(true)    
        }

     
        const [mascota, setMascotas] = useState([])

 
      
      
        useEffect(() => {
            const getMascotas = () => {
              fetch('http://localhost:18086/listMascotas')
              .then(res => res.json())
              .then(res => setMascotas(res))
            }
            getMascotas();
            setListUpdated(false)
          },[])
        
        

    return(
        <table className="table">
 
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
                        <tr key={duenio.id_duenio}>
                           <td>{duenio.id_duenio}</td>
                           <td>{duenio.nombre}</td>
                           <td>{duenio.telefono}</td>
                           <td>{duenio.direccion}</td>
                           <td>{
                               
                           
                        //    producto.tipoId === duenio.id_duenio ? (

                            mascota.map(e =>(

                                duenio.id_duenio === e.id_duenio ? (
                                
                                <ol key={e.id_duenio}>
                                    <li>{e.id_duenio}</li>
                                    <li>{e.idmascota}</li>
                                    <li>{e.nombre}</li>
                                    <li>{e.tipo}</li> 
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
                                <button onClick={() => handleDelete(duenio.id_duenio)} className="btn btn-danger">ELIMINAR</button>
                               </div>

                               <div className="mb-3">   
                                <button onClick={() => handleUpdate(duenio.id_duenio)} className="btn btn-dark">EDITAR</button>
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