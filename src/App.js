import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  let greeting = 'Bienvenido!';
  return (
    <div>
    <NavBar/>
    <ItemListContainer greeting = {greeting}/>
    </div>
  );
}

export default App;
