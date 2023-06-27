
import './App.css';
import ItemsForm from "./Components/ItemsForm";
import ItemsList from "./Components/ItemsList";

function App() {
  return (
    <div className="App">
    <h1>This is React Redux CRUD App</h1>
    <ItemsForm></ItemsForm>
    <ItemsList></ItemsList>
    </div>
  );
}

export default App;
