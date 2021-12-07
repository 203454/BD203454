import React from 'react';
import App from '../../App';

const FormCita = ({cita, setCita}) => { 

    const handleChange = e =>{
        setCita({
            ...cita,
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
            body: JSON.stringify(cita)
        }

        fetch('http://localhost:18086/cita/add', requestInit)
        .then(res => res.text())
        .then(res => console.log(requestInit.body))

        setCita({

        hora: '',
        fecha: '',
        tipoServicio: null,
        idMascota:null
        })

    }

    let{hora,fecha,tipoServicio,idMascota} = cita;


    return(
        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="hora" className="form-label">HORA</label>
                <input value={hora || ''} name="hora" onChange={handleChange} type="text" id="hora" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="fecha" className="form-label">FECHA</label>
                <input value={fecha || ''} name="fecha" onChange={handleChange} type="text" id="fecha" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="tipoServicio" className="form-label">TIPO SERVICIO</label>
                <input value={tipoServicio || ''} name="tipoServicio" onChange={handleChange} type="number" id="tipoServicio" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="idMascota" className="form-label">ID MASCOTA</label>
                <input value={idMascota || ''} name="idMascota" onChange={handleChange} type="number" id="idMascota" className="form-control"/>
            </div>
            
            <button type="submit" className="btn btn-primary">Agregar</button>

   
            
        </form>
    )
}
 
export default FormCita;