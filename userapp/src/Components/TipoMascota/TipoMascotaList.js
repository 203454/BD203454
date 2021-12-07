
import React, {Fragment, useState, useEffect} from 'react';
import FormTipoMascota from './FormTipoMascota';

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

            tipoMascota.tipoId = id;
            
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
                    <th>DESCRIPCION</th>
                    <th>MASCOTAS</th>
                </tr>
            </thead>
            <tbody>
                    {tipoMascotas.map( tipoMascota => (
                        <tr key={tipoMascota.tipoId}>
                            <td>{tipoMascota.tipoId}</td>
                           <td>{tipoMascota.nombre}</td>
                           <td>{tipoMascota.descripcion}</td>
                           <td>{
                            mascotas.map(e => (

                                tipoMascota.tipoId === e.tipoId ? (
                                
                                <ol key={e.mascotaId}>
                                    <li>{e.nombre}</li>
                                    <li>{e.mascotaId}</li>
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
                                <button onClick={() => handleDelete(tipoMascota.tipoId)} className="btn btn-danger">ELIMINAR</button>
                               </div>

                               <div className="mb-3">   
                                <button onClick={() => handleUpdate(tipoMascota.tipoId)} className="btn btn-warning">EDITAR</button>
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