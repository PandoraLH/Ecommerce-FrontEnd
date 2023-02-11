import React from "react";
import Footer from "../global/Footer";
import Contact from "./Contact";
import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";

const Home = () => {
  return (
    <div>
      <MainCarousel />
      <ShoppingList />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
