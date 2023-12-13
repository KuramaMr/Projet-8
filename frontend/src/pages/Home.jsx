import React from "react";
import NavBar from "../components/Navbar/NavBar.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Cards from "../components/Cards/Cards.jsx";

function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Cards />
    </div>
  );
}

export default Home;
