
import { Link } from "react-router-dom";
import { Home } from "./pages/home";

const App = () => {
  return (
    <>
      <h2>Olá DIO</h2>
      <Home />
      <Link to="/login"> Ir para página Inicial</Link>
    </>
  );
}

export default App;
