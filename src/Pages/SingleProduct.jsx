import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { consumoApi } from '../API/consumoApi'
import { ReactComponent as Spinner } from "../Assets/Spinner.svg";
import { ReactComponent as Carrito } from "../Assets/carritoCompras.svg";


export const SingleProduct = () => {

    const { productId } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)




    const getSimpleProduct = async () => {
        try {
            setLoading(true)
            const res = await consumoApi.get(`/api/v1/item/${productId}`)
            setProduct(res.data)
            // setLoading(false)
        } catch (error) {
            console.log(error)
        }
    };


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)

        getSimpleProduct()
    }, [])



    return (
        <>

            {
                loading ?

                    <div className='containerSpinner'>
                        <div id='spinner'> <Spinner /></div>
                        <div> <h2>Cargando...</h2> </div>
                    </div>

                    :

                    <div className="container mb-3 containerIndiv">
                        <div className="row g-2 rowIndiv ">
                            <div className='col-6 containerImg'>
                                <img src={product.image} className="card-img-top imgIndv" alt="..." />
                            </div>
                            <div className="card-body col-6 card-bodyIndv">
                                <h1 className="card-title">{product.product_name}</h1>
                                <p className="card-text">{product.description}</p>
                                <p className="card-precio">${product.price}.00</p>
                                <p className="card-category">Category: {product.category}</p>
                                <p className="card-brand">{product.brand}</p>
                            </div>
                        </div>

                        <div className='bttns__back-compra'>
                            <div className='bttn-back'> <Link className="btn btn-danger" to={"/"} >BACK</Link> </div>
                            <div className='bttn-compra'> <button type='button' className='btn btn-success'> <Carrito className='carrito' /> Agregar a Carrito</button> </div>
                        </div>
                    </div>
            }
        </>
    )
}
