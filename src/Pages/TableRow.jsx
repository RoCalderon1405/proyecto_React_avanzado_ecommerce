import React from 'react'
import { useSearchContext } from '../context/SearchContext'

const TableRow = ({ id, image, product_name, price }) => {
    const searchItemContext = useSearchContext()


    // Eliminar Data del carrito

    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar '${product_name}'`)

        if (isDelete) {
            console.log(id)
            let newData = searchItemContext.itemCarrito.filter((el) => el.id !== id)
            searchItemContext.setItemCarrito(newData)
            console.log(searchItemContext.itemCarrito)
            console.log(newData)
        } else {
            return
        }
    }

    return (
        <>
            <div className='table__body_items'>
                <div className='table__body-image'>
                    <img src={image} alt="" className='imgCarrito' />
                </div>

                <div className='table__body-productname'>
                    {product_name}
                </div>

                <div className='table__body-inputborrar'>
                    <input type="number" />
                </div>

                <div className="teble__body-precio">
                    ${price}
                </div>

                <div className='table__body-inputborrar'>
                    <button className='btn btn-danger btn-borrar' type='button' onClick={() => deleteData(id)}>
                        🗑
                    </button>
                </div>
            </div>
        </>
    )
}

export default TableRow