import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import Parallax from "../components/Parallax/Parallax";
import SideNav from "../components/SideNav/SideNav";
import Info from "../components/Info/Info";
import AboutUs from "../components/AboutUs/AboutUs";
export default function HomePage() {
  return (
    <div>
      <Navbar id="mobile-links" />
      <SideNav id="mobile-links" />
      <Parallax />
      <AboutUs />
      <Info />
      <Carousel />
    </div>
  );
}
