import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {

  return (
    <div>
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

      <ItemListContainer className="center"/>
    </div>
  );
}

export default App;
