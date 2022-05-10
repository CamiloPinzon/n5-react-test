import { useContext } from 'react';
import {Outlet} from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import { VisualThemeContext } from '../../contexts/visual-theme.context';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/svg/n5.svg';
import { 
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
    ThemeButton,
} from './navigation.styles';

const Navigation = () => {
    const { isCartOpen } = useContext(CartContext);
    const { togleTheme, defaultTheme } = useContext(VisualThemeContext);
    const changeTheme = () => togleTheme();
    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo className='logo' />
                </LogoContainer>
                <NavLinks >
                    <ThemeButton onClick={changeTheme}>{defaultTheme ? 'DARK THEME' : 'LIGHT THEME'}</ThemeButton>
                    <NavLink to='/'>SHOP</NavLink>
                    <CartIcon />
                </NavLinks>
                { isCartOpen && (<CartDropdown />) }
            </NavigationContainer>
            <Outlet />
        </>
    );
};

export default Navigation;