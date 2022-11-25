import { createContext, useState, useEffect, useContext } from "react";
import { consumoApi } from '../API/consumoApi';

const SearchItemContext = createContext()

function SearchItemProvaider(props) {
  const [items, setItems] = useState([]) //Todos los Items
  const [loading, setLoading] = useState(true) //Estado loading
  const [search, setSearch] = useState('') //String de búsqueda del input
  const [itemCarrito, setItemCarrito] = useState([]) //Items agregados al carrito

  const getProductos = async () => {
    setLoading(true)
    const res = await consumoApi.get("/api/v1/item");
    setItems(res.data)
    setLoading(false)
  };


  useEffect(() => {
    setTimeout(() => {
      getProductos()
    }, 800);

  }, [])

  const value = {
    items,
    loading,
    setLoading,
    search,
    setSearch,
    itemCarrito,
    setItemCarrito
  }

  return (
    <SearchItemContext.Provider value={value}>
      {props.children}
    </SearchItemContext.Provider>
  )
}

const useSearchContext = () => {
  const searchItemContext = useContext(SearchItemContext)
  return searchItemContext
}

export {
  SearchItemProvaider,
  useSearchContext
}