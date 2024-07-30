import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Nav from "./components/nav/nav.jsx";
import Home from "./components/home/home.jsx";
import Products from "./components/products/products.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <Router>
      <div>
        <div className="mr-12 ml-12">
          <Nav />
          <div className="mt-20">
            <Home/>
          </div>
          <div className="mt-20">
            <Products/>
          </div>
          <div className="mt-12">
            <Contact />
          </div>
        </div>
        <div>
          <Footer />
        </div>

      </div>
    </Router>
    
  );
}

export default App;
