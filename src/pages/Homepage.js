import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import Specials from "../components/Specials";
import Testimonianze from "../components/Testimonianze";
import InfoRestaurant from "../components/InfoRestaurant";

function Homepage() {
  return (
    <>
      <Header />
      <CallToAction />
      <Specials />
      <Testimonianze />
      <InfoRestaurant />
      <Footer />
    </>
  );
}

export default Homepage;

