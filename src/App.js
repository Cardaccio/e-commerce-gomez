import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import {CartProvider} from "./components/CartContext";
import Checkout from "./components/Checkout";
import { ThemeProvider } from '@mui/material/styles';
import {tegoTheme} from './components/ThemeTego';


function App() {

  return (
    <ThemeProvider theme={tegoTheme}>
    <CartProvider>
      <BrowserRouter> 
        <NavBar />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          <Routes>
            <Route path="/" element={<ItemListContainer className="center"/>}/>
            <Route path="/checkout" element={<Checkout className="item-div"/>}/>
            <Route path="/cart" element={<Cart className="center"/>}/>
            <Route path="/category/:idcategory" element={<ItemListContainer className="center"/>}/>
            <Route path="/product/:idproduct" element={<ItemDetailContainer className="center"/>}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    </CartProvider>
    </ThemeProvider>

   
  );
}

export default App;
