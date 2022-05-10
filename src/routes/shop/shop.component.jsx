import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';

import {ProductsContainer} from './shop.styles';

const Shop = () => {
  const { productsMap } = useContext(ProductsContext);
  return (
    <ProductsContainer>
    {
    productsMap.map((product) => (
      <ProductCard key={product.id} {...product} />
    ))
    }
    </ProductsContainer>
  );
};

export default Shop;