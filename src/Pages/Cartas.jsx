import React from 'react'
import { Link } from 'react-router-dom'

export const Cartas = ({ id, image, product_name, price }) => {
  return (
    <>
      <div className='cartas'> 
        <Link to={`/${id}`} className="card row d-flex justify-content-between" >
          <img
            src={image}
            className="card-img-top d-flex justify-content-center "
            alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product_name}</h5>
            <p className="card-text">{`$ ${price}.00`}</p>
          </div>
          <div className="card-body envioFull">
            <div id='envio'>
              <p>Envío gratis</p>
            </div>
            <div id='full'>
              <p>✅ FULL</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
