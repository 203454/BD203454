
import React, {Fragment, useState, useEffect} from 'react';
import Form from './Form';

const ProductoList = ({producto, productos, setListUpdated}) =>{

    const handleDelete= productoId =>{
        const requestInit = {
            method: 'POST', 
        }
        fetch('http://localhost:8021/Producto/delete/' + productoId, requestInit)
        .then(res => res.text())
        .then(res => console.log(res + productoId))

        setListUpdated(true)
        }

        const handleUpdate = id =>{

            producto.productoId = id;
            
            const requestInit = {
               
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(producto)
            }
            console.log("PRODUCTO: " + requestInit.body)
            fetch('http://localhost:8021/producto/update/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log("FETCH: " + res))
    
            setListUpdated(true)    
        }

     
        const [duenio, setDuenios] = useState([])

        useEffect(() => {
          const getDuenios = () => {
            fetch('http://localhost:8085/listDuenios')
            .then(res => res.json())
            .then(res => setDuenios(res))
          }
          getDuenios();
          setListUpdated(false)
        },[])
        
        

    return(
        <table className="table">
 
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>PRECIO</th>
                    <th>EXISTENCIA</th>
                    <th>TIPO ID</th>
                    <th>DUEÑO</th>
                </tr>
            </thead>
            <tbody>
                    {productos.map( producto => (
                        <tr key={producto.productoId}>
                           <td>{producto.productoId}</td>
                           <td>{producto.nombre}</td>
                           <td>{producto.precio}</td>
                           <td>{producto.existencia}</td>
                           <td>{producto.tipoId} </td> 
                           <td>{
                               
                           
                        //    producto.tipoId === duenio.id_duenio ? (

                            duenio.map(e =>(

                                producto.tipoId === e.id_duenio ? (
                                
                                <ol key={e.idduenio}>
                                    <li>{e.id_duenio}</li>
                                    <li>{e.nombre}</li>
                                    <li>{e.telefono}</li> 
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
                                <button onClick={() => handleDelete(producto.productoId)} className="btn btn-danger">ELIMINAR</button>
                               </div>

                               <div className="mb-3">   
                                <button onClick={() => handleUpdate(producto.productoId)} className="btn btn-dark">EDITAR</button>
                               </div>
                           </td>
                           
                        </tr>
                    )
                    )}
            </tbody>
        </table>
        )
}
export default ProductoList;