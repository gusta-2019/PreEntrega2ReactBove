import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import styles from "./ItemListContainer.module.css"

import { useParams } from "react-router-dom"

export default function ItemListContainer({greeting}) { 
  const [products, setProducts] = useState([]) 
  
  const { categoryId } = useParams()

  useEffect(() => {
    
    const asyncFunc = categoryId ?  getProductsByCategory : getProducts

      asyncFunc (categoryId)
          .then(response => {
            setProducts(response)
          })
          .catch(error => {
            console.error(error)
          })
  }, [categoryId])

  return (
    <div className={styles.bienvenida}>
        <h1>{greeting}</h1>
        <ItemList products = {products} />
    </div>
  )
}
