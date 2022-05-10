import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ligthTheme, darkTheme } from './utils/themes/themes.util';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './index.styles';
import { VisualThemeContext } from './contexts/visual-theme.context';

import Navigation from './routes/navigaton/navigation.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const  App = () => {
  const { defaultTheme  } = useContext(VisualThemeContext);
  return (
    <ThemeProvider theme={ defaultTheme ? ligthTheme : darkTheme}>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index path='/' element={<Shop/>}></Route>
          <Route path='checkout' element={<Checkout/>}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
)}

export default App;
