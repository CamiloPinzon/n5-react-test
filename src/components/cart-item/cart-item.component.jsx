import {Price, Name, ItemDetails, CartItemContainer} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
    const { name, urlImage, price, quantity} = cartItem;
    
    return (
        <CartItemContainer>
            <img src={urlImage} alt={name} />
            <ItemDetails>
                <Name>{name}</Name>
                <Price>{quantity} x ${price}</Price>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;