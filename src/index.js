import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';
import { VisualThemeProvider } from './contexts/visual-theme.context';
import App from './App';

const IndexApp = () => {
  return(
    <React.StrictMode>
      <BrowserRouter>
        <VisualThemeProvider>
            <ProductsProvider>
              <CartProvider>
                    <App />
              </CartProvider>
            </ProductsProvider>
        </VisualThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<IndexApp />);