import React from 'react'
import { useSearchContext } from '../context/SearchContext'
import TableRow from '../componentes/TableRow'
import { Link } from 'react-router-dom'


const CarritoCompras = () => {

  const searchItemContext = useSearchContext()

  return (
    <>
      <div className="container-fluid " id='contenedorTabla'>
        <div className='containderItemsTabla'>
          <h3 className='table__header-tittle'>Carrito de compras</h3>
          <div className='table'>
            {
              searchItemContext.itemCarrito.length === 0 ?
                <div className='d-flex justify-content-center text-center text-carritovacio'>
                  Tu carrito está vacío, dirígete a la <Link className='text-center link-tienda' to='/'> tienda </Link> para seleccionar tus productos
                </div>

                :
                <>

                  <div className='table__body-header'>
                    <div className='table__header-item'>Imagen</div>
                    <div className='table__header-item'>Nombre</div>
                    <div className='table__header-item'>Cantidad</div>
                    <div className='table__header-item'>Precio</div>
                    <div>B</div>
                  </div>

                  {
                    searchItemContext.itemCarrito.map((el) =>
                      <TableRow
                        key={el._id}
                        id={el._id}
                        image={el.image}
                        product_name={el.product_name}
                        description={el.description}
                        price={el.price}
                        category={el.category}
                        brand={el.brand}
                      />)
                  }
                  <div className='totalPay'>
                    <h4> Total a pagar ${ }</h4>
                  </div>
                </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CarritoCompras