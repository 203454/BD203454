
import React, {Fragment, useState, useEffect} from 'react';
import ProductoList from './productoList';
import Form from './Form'


function Productos(){

    const [datoEditar, setDatoEditar]=useState(null);


    const [producto, setProducto] = useState({
        productoId:null,
        nombre: '',
        precio: null,
        existencia: null,
        tipoId: null
      })

      const [listUpdated, setListUpdated] = useState(false)
      
      const [productos, setProductos] = useState([])

      useEffect(() => {
        const getProductos = () => {
          fetch('http://localhost:8021/listProductos')
          .then(res => res.json())
          .then(res => setProductos(res))
        }
        getProductos();
        setListUpdated(false)
      }, [listUpdated])


      

      return (
       
       
          <div className="container">
              <Fragment> 
            <div className="row">
              <div className="col-7">
                <h2 style={{textAlign: 'center'}}>producto List</h2>
                <ProductoList  producto={producto} productos={productos} setListUpdated={setListUpdated} />
              </div>
              <div className="col-5">
                <h2 style={{textAlign: 'center'}}>producto form</h2>
                <Form  producto={producto} setProducto={setProducto}/>
              </div>
    
            </div>
            </Fragment> 
          </div>
      
      );
    
}

export default Productos;