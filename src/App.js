import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/main.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/tariffs" element={<Tariffs />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App;
