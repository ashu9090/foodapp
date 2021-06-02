import React from "react";
import AppIcons from "../components/AppIcons/AppIcons";
import Delivery from "../components/Delivery/Delivery";
import Food from "../components/Food/Food";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Testimonial from "../components/Testimonial/Testimonial";

function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Food />
      <Testimonial />
      <AppIcons />
      <Delivery />
      <Footer />
    </>
  );
}

export default Home;
