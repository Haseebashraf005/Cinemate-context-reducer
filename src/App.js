import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components";
import './App.css';
// import Counter from "./reducer/CartReducer";
// import logo from './assets/logo.png'

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />

      {/* <Counter/> */}

      
    {/* <img src={logo} alt="logo"/> 
    <img src="./assets/images/logo.png" alt="logo"/> */}
    
    </div>
  );
}

export default App;
