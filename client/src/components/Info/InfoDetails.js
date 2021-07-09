import React from "react";
export default function InfoDetails({
  src,
  imgClass,
  infoClass,
  infoHeading,
  infoData
}) {
  return (
    <div className="row" style={{ marginTop: "70px" }}>
      <div className={imgClass}>
        <img src={src} alt="" className="responsive-img" />
      </div>
      <div className={infoClass}>
        <h2 className="indigo-text text-darken-4">{infoHeading}</h2>
        <p>{infoData}</p>
      </div>
    </div>
  );
}
