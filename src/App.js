import logo from "./logo.svg";
import "./App.css";
import Home from "./home";
import Contact from "./contact";
import About from "./about";
import { Routes, Route, Link } from "react-router-dom";
import Product from "./product";
import All from "./all";
import New from "./new";
import Other from "./other";
import FormCreate from "./form_create";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={`/`}>
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={`/`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/product`}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/about`}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/contact`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:name" element={<Product />}></Route>
          <Route path="/product" element={<Product />}>
            <Route path="/product/create" element={<FormCreate />} />
            <Route path="/product/all" element={<All />} />
            <Route path="/product/new" element={<New />} />
            <Route path="/product/other" element={<Other />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
