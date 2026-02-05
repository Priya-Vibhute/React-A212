import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Product } from "./components/Product";
import { Category } from "./components/Category";
import Counter from "./components/Counter";
import ShortCircuit from "./components/ShortCircuit";
import Students from "./components/Students";

function App() {
  return (
    <>
      {/* <h1>Hello</h1>
      
      <Category />
      <Counter />
      <ShortCircuit /> */}
      {/* <Students /> */}
      <Product />
    </>
  );
}

export default App;
