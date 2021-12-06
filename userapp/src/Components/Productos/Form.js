import React from 'react';
import App from '../../App';

const Form = ({producto, setProducto}) => { 

    const handleChange = e =>{
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
            
        })
    }


    const handleSubmit = (e) =>{

        if (e && "preventDefault" in e) e.preventDefault()
        //consulta
        const requestInit = {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(producto)
        }

        fetch('http://localhost:8021/producto/add', requestInit)
        .then(res => res.text())
        .then(res => console.log(requestInit.body))

        setProducto({
        
        nombre: '',
        precio: 0,
        existencia: 0,
        tipoId: 0
        
        })

    }

    let{nombre,precio,existencia,tipoId} = producto


    return(
        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input value={nombre || ''} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="precio" className="form-label">precio</label>
                <input value={precio || ''} name="precio" onChange={handleChange} type="number" id="precio" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="Existencia" className="form-label">Existencia</label>
                <input value={existencia || ''} name="existencia" onChange={handleChange} type="number" id="Existencia" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="Tipo" className="form-label">Tipo</label>
                <input value={tipoId || ''} name="tipoId" onChange={handleChange} type="number" id="Tipo" className="form-control"/>
            </div>
            
            <button type="submit" className="btn btn-primary">Agregar</button>

   
            
        </form>
    )
}
 
export default Form;