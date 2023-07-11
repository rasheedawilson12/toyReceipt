import "./App.css";
import receipt from "./models/receipt";
import Receipts from "./components/Receipts";

const state = {
  receipt,
};

function App() {
  return (
    <div className="App">
      <h1>Toy Receipts</h1>
      <Receipts orderInfo={state.receipt[0]} />
      <Receipts orderInfo={state.receipt[1]} />
      <Receipts orderInfo={state.receipt[2]} />
    </div>
  );
}

export default App;
