import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import Testimonials from "../components/Testimonials/Testimonials";
import Parallax from "../components/Parallax/Parallax";
import SideNav from "../components/SideNav/SideNav";
import Info from "../components/Info/Info";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";
export default function HomePage() {
  return (
    <div>
      <Navbar id="mobile-links" />
      <SideNav id="mobile-links" />
      <Slider />
      <AboutUs />
      <Parallax />
      <Info />
      <Testimonials />
      <Footer />
    </div>
  );
}
