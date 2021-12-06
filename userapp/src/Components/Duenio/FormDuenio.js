import React from 'react';
import App from '../../App';

const FormDuenio = ({duenio, setDuenio}) => { 

    const handleChange = e =>{
        setDuenio({
            ...duenio,
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
            body: JSON.stringify(duenio)
        }

        fetch('http://localhost:18086/duenio/add', requestInit)
        .then(res => res.text())
        .then(res => console.log(requestInit.body))

        setDuenio({
        
        nombre: '',
        telefono: 0,
        direccion: ''
        
        })

    }

    let{nombre,telefono,direccion} = duenio


    return(
        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input value={nombre || ''} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Telefono</label>
                <input value={telefono || ''} name="telefono" onChange={handleChange} type="number" id="telefono" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Direccion</label>
                <input value={direccion || ''} name="direccion" onChange={handleChange} type="text" id="direccion" className="form-control"/>
            </div>
            
            <button type="submit" className="btn btn-primary">Agregar</button>

   
            
        </form>
    )
}
 
export default FormDuenio;