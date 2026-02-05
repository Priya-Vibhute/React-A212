import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Product } from "./components/Product";
import { Category } from "./components/Category";
import Counter from "./components/Counter";
import ShortCircuit from "./components/ShortCircuit";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Product />
      <Category />
      <Counter />
      <ShortCircuit />
    </>
  );
}

export default App;
