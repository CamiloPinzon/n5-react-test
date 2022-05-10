import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
    Arrow,
    Value,
    Quantity,
    Name,
    Price,
    RemoveButton,
    ImageContainer,
    CheckoutItemContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
    const { urlImage, name, quantity, price} = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const clearCartItemHandler = () => {
        clearItemFromCart(cartItem);
    }
    const addItemHandler = () => {
        addItemToCart(cartItem);
    }
    const removeItemHandler = () => {
        removeItemFromCart(cartItem);
    }

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={urlImage} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <Price>{`$${price}`}</Price>
            <RemoveButton onClick={clearCartItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;