import React from 'react';
import App from '../../App';

const FormMedicamento = ({medicamento, setMedicamento}) => { 

    const handleChange = e =>{
        setMedicamento({
            ...medicamento,
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
            body: JSON.stringify(medicamento)
        }

        fetch('http://localhost:18086/medicamento/add', requestInit)
        .then(res => res.text())
        .then(res => console.log(requestInit.body))

        setMedicamento({
        
        nombre: '',
        fechaCaducidad: null,
        sustanciaActiva: '',
        
        })

    }

    let{nombre,fechaCaducidad,sustanciaActiva} = medicamento


    return(
        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input value={nombre || ''} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="Fecha de Caducidad" className="form-label">fechaCaducidad</label>
                <input value={fechaCaducidad || ''} name="Fecha de Caducidad" onChange={handleChange} type="number" id="Fecha de caducidad" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="Fecha de Caducidad" className="form-label">Sustancia Activa</label>
                <input value={sustanciaActiva || ''} name="Fecha de Caducidad" onChange={handleChange} type="text" id="Fecha de Caducidad" className="form-control"/>
            </div>
            
            <button type="submit" className="btn btn-primary">Agregar</button>

   
            
        </form>
    )
}
 
export default FormMedicamento;