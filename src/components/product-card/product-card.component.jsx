import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import {
    Price,
    Name,
    Footer,
    ProductCardContainer
} from './product-card.styles';

const ProductCard = (product) => {
    const { name, price, urlImage} = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    return(
        <ProductCardContainer>
            <img src={urlImage} alt={name} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick= {addProductToCart} >Add Product</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;