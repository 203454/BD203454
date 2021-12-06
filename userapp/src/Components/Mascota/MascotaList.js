
import React, {Fragment, useState, useEffect} from 'react';
import FormMascota from './FormMascota';

const MascotaList = ({mascota, mascotas, setListUpdated}) =>{

    const handleDelete= mascotaId =>{
        const requestInit = {
            method: 'POST', 
        }
        fetch('http://localhost:18081/Mascota/delete/' + mascotaId, requestInit)
        .then(res => res.text())
        .then(res => console.log(res + mascotaId))

        setListUpdated(true)
        }

        const handleUpdate = id =>{

            mascota.productoId = id;
            
            const requestInit = {
               
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(mascota)
            }
            console.log("PRODUCTO: " + requestInit.body)
            fetch('http://localhost:18081/Mascota/update/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log("FETCH: " + res))
    
            setListUpdated(true)    
        }

     
        /* const [mascota, setMascotas] = useState([])

 
      
      
        useEffect(() => {
          const getMascotas = () => {
            fetch('http://localhost:18081/')
            .then(res => res.json())
            .then(res => setMascotas(res))
          }
          getMascotas();
          setListUpdated(false)
        },[]) */
        
        

    return(
        <table className="table">
 
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>DUEÑO ID</th>
                    <th>TIPO ID</th>
                    <th>FECHA INGRESO</th>
                    <th>MOTIVO INGRESO</th>
                </tr>
            </thead>
            <tbody>
                    {mascotas.map( mascota => (
                        <tr key={mascota.mascotaId}>
                           <td>{mascota.nombre}</td>
                           <td>{mascota.duenioId}</td>
                           <td>{mascota.tipoId}</td>
                           <td>{mascota.fechaIngreso}</td>
                           <td>{mascota.motivoIngreso}</td>
                           {/* <td>{
                            mascota.map(e =>(

                                cita.idcita === e.duenioId ? (
                                
                                <ol key={e.nombre}>
                                    <li>{e.duenioId}</li>
                                    <li>{e.tipoId}</li>
                                    <li>{e.fechaIngreso}</li> 
                                    <li>{e.motivoIngreso}</li> 
                                    {}
                                </ol>  
                                 )
                                :(
                            <td>Sin datos</td>
                                )

                             )
                             )

                           }
                           </td>  */}                          
                           <td>
                               <div className="mb-3">
                                <button onClick={() => handleDelete(mascota.mascotaId)} className="btn btn-danger">ELIMINAR</button>
                               </div>

                               <div className="mb-3">   
                                <button onClick={() => handleUpdate(mascota.mascotaId)} className="btn btn-dark">EDITAR</button>
                               </div>
                           </td>
                           
                        </tr>
                    )
                    )}
            </tbody>
        </table>
        )
}
export default MascotaList;