import { createContext, useState, useEffect } from "react";

import { getProducts } from "../utils/query/query.utils";

export const ProductsContext = createContext({
    productsMap: [],
    updateProductsMap: () => {},
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

    const updateProductsMap = (products) => {
        const newProducts = products.map((product) => {
            // eslint-disable-next-line array-callback-return
            return productsMap.map((productItem) => {
                return productItem.id === product.id ? {...productItem, amount: (productItem.amount - product.quantity)} : productItem;
            });
        });
        console.log(newProducts);
        setProductsMap(newProducts[0]);
    }
   
   const value = {
       productsMap,
       updateProductsMap,
    };

    return <ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>
}