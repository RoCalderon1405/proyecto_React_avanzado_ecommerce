// Reglas para crear un Hook
// Custom hook es una funcion que utiliza otros hooks de react
// 1. Siempre debemos usar la palabra 'use' al nombrarlo: useForm  
// 2. Siempre deben de ser funciones ( a partir de React v16 usamos hooks)
// 3. Siempre debe usar al menos un Hook de react (useState, useRef, useEffect, etc...)
// 4. Deben ser reutilizables, no son para casos específicos 
import { useEffect, useState } from 'react'

function useForm(callback, defaults) {
    // Estado único para guardar los datos de mi formulario en un objeto
    const [input, setInput] = useState(defaults)

    // Cargar los valorers por defecto
    useEffect(() => {
        setInput({ ...defaults })
    }, [])

    // Función que se ejecuta cuando se hace un cambio en un input
    const handleInputChange = (event) => {
        const { name, value } = event.target

        // console.log(name,value)
        setInput({...input, [name]: value})
    }
    
    // Función que se ejecuta cuando se envía el formulario
    const handleSubmit = (event) => {
        event.preventDefault() //Evita que se recargue la página y rompa el SPA
        callback(input)  //Esta es la función que se recibe por parámetro
    }
    
    return {
        input,
        handleSubmit,
        handleInputChange
    }
    
}
export default useForm