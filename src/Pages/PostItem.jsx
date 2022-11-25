import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../Hook/useForm'
import { postProduct } from '../Services/userServices'

const PostItem = () => {

    const navigate = useNavigate()
    const sendData = async (data) => {
        console.log(data)
        try {
            const result = await postProduct(data)
            let resultado = false
            if (result.status === 200) {
                resultado = window.confirm('¿Deseas agregar más productos?')
                if (resultado) {
                    navigate('/')
                }
            }
        } catch (err) {
            console.log('Ocurrió un error en Signup: ' + err.message)
        }
    }

    const { input, handleSubmit, handleInputChange } = useForm(sendData,
        {
            isActive: true,
            product_name: '',
            description: '',
            price: '',
            category: '',
            brand: '',
            sku: Date.now(),
            image: '',
        })

    return (
        <>
            <main className='form-signin w-100 m-auto'>
                <form onSubmit={handleSubmit}>

                    <h1 className='h3 mb-3 fw-normal'>Completa los campos</h1>

                    <div className='form-floating'>
                        <input
                            type='text'
                            className='form-control'
                            id='product_name'
                            name='product_name'
                            placeholder='Nombre del producto'
                            value={input.product_name}
                            onChange={handleInputChange}
                        />
                        <label htmlFor='product_name'>Nombre del producto</label>
                    </div>

                    <div className='form-floating'>
                        <input
                            type='text'
                            className='form-control'
                            id='description'
                            name='description'
                            placeholder='Descripción del producto'
                            value={input.description}
                            onChange={handleInputChange}
                        />
                        <label htmlFor='description'>Descripción</label>
                    </div>

                    <div className='form-floating'>
                        <input
                            type='text'
                            className='form-control'
                            id='price'
                            name='price'
                            placeholder='Precio del producto'
                            value={input.price}
                            onChange={handleInputChange}
                        />
                        <label htmlFor='price'>Precio</label>
                    </div>


                    <div className='form-floating'>
                        <select
                            className='form-select'
                            id='category'
                            name='category'
                            value={input.category}
                            onChange={handleInputChange}
                        >
                            <option value=''>Categoría...</option>
                            <option value='Books'>Books</option>
                            <option value='Movies'>Movies</option>
                            <option value='Music'>Music</option>
                            <option value='Games'>Games</option>
                            <option value='Electronics'>Electronics</option>
                            <option value='Computers'>Computers</option>
                            <option value='Home'>Home</option>
                            <option value='Garden'>Garden</option>
                            <option value='Tools'>Tools</option>
                            <option value='Grocery'>Grocery</option>
                            <option value='Health'>Health</option>
                            <option value='Beauty'>Beauty</option>
                            <option value='Toys'>Toys</option>
                            <option value='Kids'>Kids</option>
                            <option value='Baby'>Baby</option>
                            <option value='Clothing'>Clothing</option>
                            <option value='Shoes'>Shoes</option>
                            <option value='Jewelery'>Jewelery</option>
                            <option value='Outdoor'>Outdoor</option>
                            <option value='Automotive'>Automotive</option>
                            <option value='Industrial'>Industrial</option>
                            <option value='Female'>Female</option>

                        </select>
                        <label htmlFor='category'>Elige...</label>
                    </div>

                    <div className='form-floating'>
                        <input
                            type='text'
                            className='form-control'
                            id='brand'
                            name='brand'
                            placeholder='Brand'
                            value={input.brand}
                            onChange={handleInputChange}
                        />
                        <label htmlFor='price'>Marca</label>
                    </div>

                    <div className='form-floating'>
                        <input
                            type='text'
                            className='form-control'
                            id='image'
                            name='image'
                            placeholder='image'
                            value={input.image}
                            onChange={handleInputChange}
                        />
                        <label htmlFor='image'>URL de la imagen</label>
                    </div>

                    <button className='w-100 btn btn-lg btn-primary' type='submit'>Subir producto</button>

                </form>
            </main>

        </>
    )
}

export default PostItem