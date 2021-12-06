
import React, {Fragment, useState, useEffect} from 'react';
import FormTipoMascotafrom from './FormTipoMascotafrom';

const TipoMascotaList = ({tipoMascota, tipoMascotas, setListUpdated}) =>{

    const handleDelete= tipoId =>{
        const requestInit = {
            method: 'POST', 
        }
        fetch('http://localhost:18085/TipoMascota/delete/' + tipoId, requestInit)
        .then(res => res.text())
        .then(res => console.log(res + tipoId))

        setListUpdated(true)
        }

        const handleUpdate = id =>{

            tipoMascota.productoId = id;
            
            const requestInit = {
               
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(tipoMascota)
            }
            console.log("PRODUCTO: " + requestInit.body)
            fetch('http://localhost:18085/TipoMascota/update/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log("FETCH: " + res))
    
            setListUpdated(true)    
        }

     
         const [mascota, setMascotas] = useState([])

 
    
      
        useEffect(() => {
          const getMascotas = () => {
            fetch('http://localhost:18085/listTiposMascotas/')
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
                    <th>DESCRIPCION</th>
                    <th>MASCOTAS</th>
                </tr>
            </thead>
            <tbody>
                    {tipoMascotas.map( tipoMascota => (
                        <tr key={tipoMascota.tipoId}>
                           <td>{tipoMascota.nombre}</td>
                           <td>{tipoMascota.descripcion}</td>
                           {<td>{
                            tipoMascota.map(e => (

                                tipoMascota.tipoId === e.tipoId ? (
                                
                                <ol key={e.nombre}>
                                    <li>{e.duenioId}</li>
                                    <li>{e.tipoId}</li>
                                    <li>{e.fechaIngreso}</li> 
                                    <li>{e.motivoIngreso}</li> 
                                  
                                </ol>  
                                 )
                                :(
                            <td>Sin datos</td>
                                )

                             )
                             )

                           }
                           </td>  }                          
                           <td>
                               <div className="mb-3">
                                <button onClick={() => handleDelete(tipoMascota.tipoId)} className="btn btn-danger">ELIMINAR</button>
                               </div>

                               <div className="mb-3">   
                                <button onClick={() => handleUpdate(tipoMascota.tipoId)} className="btn btn-dark">EDITAR</button>
                               </div>
                           </td>
                           
                        </tr>
                    )
                    )}
            </tbody>
        </table>
        )
}
export default TipoMascotaList;