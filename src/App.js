import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  let itemOne = { stock: 5, initial: 1 };
  const onAdd = (cant) =>
    toast.success(`Agregaste al carrito ${cant} 👌`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });


  return (
    <div>
      <NavBar />

      <ItemCount
        stock={itemOne.stock}
        initial={itemOne.initial}
        onAdd={onAdd}
      />
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
