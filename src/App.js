
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { GlobalStyle } from './styles/global';
import { Home } from './pages/home';
import { Login } from "./pages/login";

const App = () => {
  return (
      <Router>
       <GlobalStyle />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
       </Routes >
      </Router>
  );
}

export default App;
