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

        fetch('http://localhost:18083/Medicamento/add', requestInit)
        .then(res => res.text())
        .then(res => console.log(requestInit.body))

        setMedicamento({
        
        nombre: '',
        fechaCaducidad: null,
        sustanciaActiva: '',
        tipoMedicamentoId:null
        })

    }

    let{nombre,fechaCaducidad,sustanciaActiva,tipoMedicamentoId} = medicamento


    return(
        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input value={nombre || ''} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="fechaCaducidad" className="form-label">fechaCaducidad</label>
                <input value={fechaCaducidad || ''} name="fechaCaducidad" onChange={handleChange} type="text" id="fechaCaducidad" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="sustanciaActiva" className="form-label">Sustancia Activa</label>
                <input value={sustanciaActiva || ''} name="sustanciaActiva" onChange={handleChange} type="text" id="sustanciaActiva" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="tipoMedicamentoId" className="form-label">Tipo</label>
                <input value={tipoMedicamentoId || ''} name="tipoMedicamentoId" onChange={handleChange} type="number" id="tipoMedicamentoId" className="form-control"/>
            </div>
            
            <button type="submit" className="btn btn-primary">Agregar</button>

   
            
        </form>
    )
}
 
export default FormMedicamento;