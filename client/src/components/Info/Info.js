import React, { useEffect } from "react";
import M from "materialize-css";
import InfoDetails from "./InfoDetails";
export default function Info() {
  useEffect(() => {
    var elems = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(elems);
  });
  return (
    <div className="container section" id="info">
      <InfoDetails
        src="http://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg"
        imgClass="col s12 l6 push-l6"
        infoClass="col s12 l6 pull-l6"
        infoHeading="Info1"
        infoData="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          temporibus exercitationem ullam laudantium unde maxime consectetur."
      />
      <InfoDetails
        src="https://million-wallpapers.com/wallpapers/1/85/17779089886909635971/river-landscape-cool-nice-nature-landscape-forest-autumn.jpg"
        imgClass="col s12 l6"
        infoClass="col s12 l6"
        infoHeading="Info2"
        infoData="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          temporibus exercitationem ullam laudantium unde maxime consectetur."
      />
      <InfoDetails
        src="http://www.thewowstyle.com/wp-content/uploads/2015/01/nature-wallpapers-1.jpg"
        imgClass="col s12 l6 push-l6"
        infoClass="col s12 l6 pull-l6"
        infoHeading="Info3"
        infoData="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          temporibus exercitationem ullam laudantium unde maxime consectetur."
      />
    </div>
  );
}
