import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Button from '../../components/button/button.component';

import {Total, CheckoutHeader, HeaderBlock, CheckoutContainer} from './checkout.styles';

const Checkout = () => {
    const { cartItems, cartTotal, payCart } = useContext(CartContext);

    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map((cartItem) => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <Total>Total: ${cartTotal}</Total>
            <Button onClick={payCart}>Pay</Button>
        </CheckoutContainer>

    )
}

export default Checkout;