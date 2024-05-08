import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getProducts from "../../data/getProducts";
import { useParams } from "react-router-dom";
import Hero from "../Hero/Hero";
import { PulseLoader } from "react-spinners";
import React from 'react'
import "./itemListContainer.css"

const ItemListContainer = ({ productsTitle }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { idCategory } = useParams()

  useEffect(() => {
    setLoading(true)

    getProducts
      .then((response) => {
        if(idCategory){
          const newProducts = response.filter((product)=> product.category === idCategory )
          setProducts(newProducts)
        }else{
          setProducts(response)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [idCategory]);

  return (
    <div className="itemListContainer">
      <Hero />
      <h1 className="productsTitle" >{productsTitle}</h1>
      {
        loading ? <PulseLoader color="#efc39d" /> : <ItemList products={products} />
      }
    </div>
  )
}

export default ItemListContainer