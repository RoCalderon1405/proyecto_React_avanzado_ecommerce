import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { consumoApi } from '../API/consumoApi'
import { ReactComponent as Spinner } from "../Assets/Spinner.svg";
import { ReactComponent as Carrito } from "../Assets/carritoCompras.svg";
import { useSearchContext } from '../context/SearchContext';


const SingleProduct = () => {

    const searchItemContext = useSearchContext()
    const { productId } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)


    const getSimpleProduct = async () => {
        try {
            setLoading(true)
            const res = await consumoApi.get(`/api/v1/item/${productId}`)
            setProduct(res.data)
        } catch (error) {
            console.log(error)
        }
    };


    let array = []
    const addCarrito = () => {
        array = searchItemContext.itemCarrito
        array.push(product)
        searchItemContext.setItemCarrito(array)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1200)

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
                                <p className="card-titleindv">{product.product_name}</p>
                                <p className="card-textindv">{product.description}</p>
                                <p className="card-precioindv"><b>${product.price}.00</b></p>
                                <p className="card-categoryindv">Category: {product.category}</p>
                                <p className="card-brandindv">{product.brand}</p>
                            </div>
                            <div className='bttns__back-compra'>
                                <Link className='btn btn-danger bttn-back'> <div className="bttn--back-link" to={"/"} >BACK</div>
                                </Link>
                                <Link className='btn btn-success bttn-compra' to={'/buy'}onClick={addCarrito}>
                                <div className='bttn--compra-link' to='/'> <Carrito className='carrito' /> Agregar a Carrito </div>
                                </Link>
                            </div>
                        </div>

                    </div>
            }
        </>
    )
}
export default SingleProduct