
import React, {Fragment, useState, useEffect} from 'react';
import FormCita from './FormCita';

const CitaList = ({cita, citas, setListUpdated}) =>{

    const handleDelete= idCita =>{
        const requestInit = {
            method: 'POST', 
        }
        fetch('http://localhost:18086/' + idCita, requestInit)
        .then(res => res.text())
        .then(res => console.log(res + idCita))

        setListUpdated(true)
        }

        const handleUpdate = id =>{

            cita.productoId = id;
            
            const requestInit = {
               
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(cita)
            }
            console.log("PRODUCTO: " + requestInit.body)
            fetch('http://localhost:18086/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log("FETCH: " + res))
    
            setListUpdated(true)    
        }

     
        const [mascota, setMascotas] = useState([])

 
      
      
        useEffect(() => {
          const getMascotas = () => {
            fetch('http://localhost:18086/')
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
                    <th>CITA ID</th>
                    <th>HORA</th>
                    <th>FECHA</th>
                    <th>TIPO SERVICIO</th>
                    <th>MASCOTAS</th>
                </tr>
            </thead>
            <tbody>
                    {citas.map( cita => (
                        <tr key={cita.idcita}>
                           <td>{cita.hora}</td>
                           <td>{cita.fecha}</td>
                           <td>{cita.tiposervicio}</td>
                           <td>{cita.idCita}</td>
                           <td>{
                        //    producto.tipoId === duenio.id_duenio ? (
                            mascota.map(e =>(

                                cita.idCita === e.mascotaId ? (
                                
                                <ol key={e.mascotaId}>
                                    <li>{e.mascotaId}</li>
                                    <li>{e.nombre}</li>
                                    <li>{e.duenioId}</li>
                                    <li>{e.tipoId}</li>
                                    <li>{e.fechaIngreso}</li>
                                    <li>{e.motivoIngreso}</li>
                         
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
                                <button onClick={() => handleDelete(cita.idcita)} className="btn btn-danger">ELIMINAR</button>
                               </div>

                               <div className="mb-3">   
                                <button onClick={() => handleUpdate(cita.idcita)} className="btn btn-dark">EDITAR</button>
                               </div>
                           </td>
                           
                        </tr>
                    )
                    )}
            </tbody>
        </table>
        )
}
export default CitaList;