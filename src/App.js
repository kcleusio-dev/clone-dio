
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { GlobalStyle } from './styles/global';
import { Home } from './pages/home';

const App = () => {
  return (
      <Router>
       <GlobalStyle />
       <Routes>
          <Route path="/" element={<Home />} />
       </Routes >
      </Router>
  );
}

export default App;
