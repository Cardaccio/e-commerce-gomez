import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {

  return (
 
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
            <Route path="/category/:idcategory" element={<ItemListContainer className="center"/>}/>
            <Route path="/product/:idproduct" element={<ItemDetailContainer className="center"/>}/>
          </Routes>
          <ItemDetailContainer />
          <Footer />
      </BrowserRouter>


      
    
  );
}

export default App;
