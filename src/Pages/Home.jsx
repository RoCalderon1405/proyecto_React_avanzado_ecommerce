import React, { useEffect, useState } from 'react';
import { consumoApi } from '../API/consumoApi';
import { Cartas } from './Cartas';
import { NavBar } from './NavBar';
import { ReactComponent as Spinner } from "../Assets/Spinner.svg";

export const Home = ({searcher}) => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const [filterItem, setfilterItem] = useState("")

  const getProductos = async () => {
    setLoading(true)
    const res = await consumoApi.get("/api/v1/item");
    setItems(res.data)
    setLoading(false)
  };



  const filter = (searcher) => {
    let arrayFilter = []
    console.log(searcher)
    setfilterItem(searcher)
    
    if(!searcher) {
      arrayFilter = items
    } else {
      arrayFilter = items.filter((producto) =>
      producto.product_name.toLowerCase().includes(searcher.toLocaleLowerCase()))
      // console.log(results)
      setResults(arrayFilter)
    }
    return results
  }

  console.log(filterItem)
  console.log(results)

  
  useEffect(() => {
    getProductos()
    filter()
  }, [])

  // const results = !search
  return (
    <>
    
      <NavBar filter={filter}/>
      
      <div className="container-fluid" id='contenedorCartas'>
          {
            loading ? <div id='spinner'> <Spinner/> </div>: 
            
            !filterItem ?
            items.map((el) => (
              <Cartas
                key={el._id}
                id={el._id}
                image={el.image}
                product_name={el.product_name}
                description={el.description}
                price={el.price}
                category={el.category}
                brand={el.brand}
              />
            ))
            :
            results.map((el) => (
              <Cartas
                key={el._id}
                id={el._id}
                image={el.image}
                product_name={el.product_name}
                description={el.description}
                price={el.price}
                category={el.category}
                brand={el.brand}
              />
            ))
            
          }
          
        </div>
    </>
  )
}