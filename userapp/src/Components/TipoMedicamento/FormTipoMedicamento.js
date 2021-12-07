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

        fetch('http://localhost:18084/TipoMedicamento/add', requestInit)
        .then(res => res.text())
        .then(res => console.log(requestInit.body))

        setTipoMedicamento({    
        nombre: '',
        descripcion: ''
        })

    }

    let{nombre,descripcion} = tipoMedicamento


    return(
        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">NOMBRE</label>
                <input value={nombre || ''} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">DESCRIPCION</label>
                <input value={descripcion || ''} name="descripcion" onChange={handleChange} type="text" id="descripcion" className="form-control"/>
            </div>
            
            <button type="submit" className="btn btn-primary">Agregar</button>

   
            
        </form>
    )
}
 
export default FormTipoMedicamento;