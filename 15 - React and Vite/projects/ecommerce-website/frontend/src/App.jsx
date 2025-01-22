import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
// Step 1: install bootstrap
// npm i react-bootstrap bootstrap
// Step 2: Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Step 3: Import Bootstrap JavaScript (includes Popper.js)
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { Routes, Route, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Cart from "./pages/Cart";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  return (
    <Container>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Container>
  );
}
export default App;
