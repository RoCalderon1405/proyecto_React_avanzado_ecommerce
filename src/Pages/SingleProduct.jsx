import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { consumoApi } from '../API/consumoApi'
import { ReactComponent as Spinner } from "../Assets/Spinner.svg";

export const SingleProduct = () => {

    const { productId } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)




    const getSimpleProduct = async () => {
        try {
            setLoading(true)
            const res = await consumoApi.get(`/api/v1/item/${productId}`);
            setProduct(res.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getSimpleProduct()
    }, [])

    console.log({} === {})


    return (
        <>
            {
                loading ? <Spinner id='spinner'/> :

                    <div className="container mb-3 containerIndiv">
                        <div className="row g-2 rowIndiv ">
                            <div className='col-6 '>
                                <img src={product.image} className="card-img-top imgIndv" alt="..." />
                            </div>
                            <div className="card-body col-6 card-bodyIndv">
                                <h5 className="card-title">{product.product_name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text"><small className="text-muted">${product.price}.00</small></p>
                                <p className="card-text"><small className="text-muted">{product.category}</small></p>
                                <p className="card-text"><small className="text-muted">{product.brand}</small></p>
                            </div>
                        </div>
                    </div>
            }
            <button>Agregar a Carrito</button>
            <Link className="bttn" to={"/"} >BACK</Link>
        </>
    )
}
