import { createContext, useState, useEffect } from "react";

import { getProducts } from "../utils/query/query.utils";

export const ProductsContext = createContext({
    productsMap: []
})

export const ProductsProvider = ({ children }) => {
    const [productsMap, setProductsMap] = useState([]);
   useEffect(() => {
       const getproductsMap = async() => {
           const productMap = await getProducts();
           setProductsMap(productMap);
       }
       getproductsMap();
   }, []);
   
   const value = {productsMap};

    return <ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>
}