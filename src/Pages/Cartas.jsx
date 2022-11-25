import React from 'react'
import { Link } from 'react-router-dom'

export const Cartas = ({ id, image, product_name, price }) => {
  return (
    <>
      <div className='cartas'>
        <Link to={`/${id}`} className="card" >
          <div className="d-flex justify-content-start">
            <img
              src={image}
              className="card-img-top"
              alt="..." />
          </div>
          <div className="card-body">
            <div className="card-title">{product_name}</div>
            <p className="card-texto">{`$ ${price}.00`}</p>
          </div>
          <div className="card-body envioFull">
            <div id='envio'>
              <p>Envío gratis</p>
            </div>
            <div>
              <p id='full'>✅ FULL</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
