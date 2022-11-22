import React from 'react';
import { Cartas } from './Cartas';
import { ReactComponent as Spinner } from "../Assets/Spinner.svg";
import { useSearchContext } from '../context/SearchContext';


export const Home = () => {
  const searchItemContext = useSearchContext()

  // let arrayFilter = []

  // if (!searchItemContext.search) {
  //   console.log(searchItemContext.search)
  //   arrayFilter = searchItemContext.items
  // } else {
  //   arrayFilter = searchItemContext.items.filter((producto) =>
  //     producto.product_name.toLowerCase().includes(searchItemContext.search.toLocaleLowerCase()))
  //   searchItemContext.setResults(arrayFilter)
  //   console.log(searchItemContext.results)
  // }


  return (
    <>

      {
        searchItemContext.loading ?

          <div className='containerSpinner'>
            <div id='spinner'> <Spinner /></div>
            <div> <h2>Cargando...</h2> </div>
          </div>

          :

          <div className="container-fluid " id='contenedorCartas'>
            {
              searchItemContext.items.filter((el) => {
                if (searchItemContext.search === '') {
                  return searchItemContext.items
                } else if (el.product_name.toLowerCase().includes(searchItemContext.search.toLowerCase())) {
                  return searchItemContext.items
                }
                return null
              }).map((el) => (
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
      }

    </>
  )
}