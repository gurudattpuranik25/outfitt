import "./App.css";
import Context from "./components/Context";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import NoProductsFound from "./components/NoProductsFound";
import ProductsPage from "./components/ProductsPage";

function App() {
  return (
    <Context>
      <div className="App">
        <Header />
        <ProductsPage />
        {/* <NoProductsFound /> */}
        <Footer />
      </div>
    </Context>
  );
}

export default App;
