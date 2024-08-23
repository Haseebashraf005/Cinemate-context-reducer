import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components";
import './App.css';
import Counter from "./reducer/CartReducer";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Counter/>
    </div>
  );
}

export default App;
