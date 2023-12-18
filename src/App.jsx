import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Company from "./components/companies";
import Products from "./components/Products";
import Studio from "./components/Studio";
import NewsLetter from "./components/NewsLetter";
import Technology from "./components/Technology";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Hero />
      <Company />
      <Technology />
      <Studio />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
