import React from 'react';
import App from '../../App';

const FormTipoMedicamento = ({tipoMedicamento, setTipoMedicamento}) => { 

    const handleChange = e =>{
        setTipoMedicamento({
            ...tipoMedicamento,
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
            body: JSON.stringify(tipoMedicamento)
        }

        fetch('', requestInit)
        .then(res => res.text())
        .then(res => console.log(requestInit.body))

        setTipoMedicamento({    
        tipoMedicamentoId: null,
        nombre: '',
        descripcion: ''
        })

    }

    let{tipoMedicamentoId,nombre,descripcion} = tipoMedicamento


    return(
        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="tipoMedicamentoId" className="form-label">TIPO MEDICAMENTO ID</label>
                <input value={tipoMedicamentoId || ''} name="tipoMedicamentoId" onChange={handleChange} type="text" id="tipoMedicamentoId" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">NOMBRE</label>
                <input value={nombre || ''} name="precio" onChange={handleChange} type="number" id="nombre" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">DESCRIPCION</label>
                <input value={descripcion || ''} name="descripcion" onChange={handleChange} type="number" id="descripcion" className="form-control"/>
            </div>


            
            <button type="submit" className="btn btn-primary">Agregar</button>

   
            
        </form>
    )
}
 
export default FormTipoMedicamento;