
import React, {Fragment, useState, useEffect} from 'react';
import FormCita from './FormCita';

const CitaList = ({cita, citas, setListUpdated}) =>{

    const handleDelete = idCita =>{
        const requestInit = {
            method: 'POST', 
        }
        fetch('http://localhost:18086/cita/delete/' + idCita, requestInit)
        .then(res => res.text())
        .then(res => console.log(res + idCita))

        setListUpdated(true)
        }

        const handleUpdate = id =>{

            cita.idCita = id;
            
            const requestInit = {
               
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(cita)
            }
            console.log("PRODUCTO: " + requestInit.body)
            fetch('http://localhost:18086/cita/update/' + id, requestInit)
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
        <table class="table table-bordered">
 
            <thead>
                <tr>
                    <th cope="col">CITA ID</th>
                    <th cope="col">HORA</th>
                    <th cope="col">FECHA</th>
                    <th cope="col">TIPO SERVICIO</th>
                    <th cope="col">MASCOTAS</th>
                </tr>
            </thead>
            <tbody>
                    {citas.map( cita => (
                        <tr cope="row" key={cita.idCita}>
                            <td>{cita.idCita}</td>
                           <td>{cita.hora}</td>
                           <td>{cita.fecha}</td>
                           <td cope="row"> {cita.tipoServicio}</td>
                           <td>{
                         //    producto.tipoId === duenio.id_duenio ? (
                            mascotas.map(e =>(

                                cita.idMascota === e.mascotaId ? (
                                
                                <ul key={e.mascotaId}>
                                    <li>{e.mascotaId}</li>
                                    <li>{e.nombre}</li>
                                    {/* <li>{e.duenioId}</li>
                                    <li>{e.tipoId}</li>
                                    <li>{e.fechaIngreso}</li>
                                    <li>{e.motivoIngreso}</li> */}
                         
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
                                <button onClick={() => handleDelete(cita.idCita)} className="btn btn-danger">ELIMINAR</button>
                               </div>

                               <div className="mb-3">   
                                <button onClick={() => handleUpdate(cita.idCita)} className="btn btn-warning">EDITAR</button>
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