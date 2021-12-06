import React from 'react';
import App from '../../App';

const FormMascota = ({mascota, setMascota}) => { 

    const handleChange = e =>{
        setMascota({
            ...mascota,
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
            body: JSON.stringify(mascota)
        }

        fetch('http://localhost:18081/Mascota/add', requestInit)
        .then(res => res.text())
        .then(res => console.log(requestInit.body))

        setMascota({

        nombre:'',
        duenioId:null,
        tipoId:null,
        fechaIngreso:'',
        motivoIngreso:''

        
        
        })

    }

    let{nombre,duenioId,tipoId,fechaIngreso,motivoIngreso} = mascota;


    return(
        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">NOMBRE</label>
                <input value={nombre || ''} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="duenioId" className="form-label">DUEÑO ID</label>
                <input value={duenioId || ''} name="duenioId" onChange={handleChange} type="number" id="duenioId" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="tipoId" className="form-label">TIPO ID</label>
                <input value={tipoId || ''} name="tipoId" onChange={handleChange} type="number" id="tipoId" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="fechaIngreso" className="form-label">FECHA INGRESO</label>
                <input value={fechaIngreso || ''} name="fechaIngreso" onChange={handleChange} type="text" id="fechaIngreso" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="motivoIngreso" className="form-label">MOTIVO INGRESO</label>
                <input value={motivoIngreso || ''} name="motivoIngreso" onChange={handleChange} type="text" id="motivoIngreso" className="form-control"/>
            </div>
            
            <button type="submit" className="btn btn-primary">Agregar</button>

   
            
        </form>
    )
}
 
export default FormMascota;