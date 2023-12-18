import React from "react";
import NavBar from "../components/Navbar/NavBar.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Cards from "../components/Cards/Cards.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
