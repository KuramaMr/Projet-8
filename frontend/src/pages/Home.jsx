import React from "react";
import NavBar from "../components/Navbar/NavBar.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Cards from "../components/Cards/Cards.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Marge from "../components/Marge/Marge.jsx";

function Home() {
  return (
    <div>
      <Marge>
      <NavBar />
      <Banner />
      <Cards />
      </Marge>
      <Footer />
    </div>
  );
}

export default Home;
