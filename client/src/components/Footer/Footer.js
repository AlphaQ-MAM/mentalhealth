import React from "react";
// import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social_links}>
        <a href="https://www.instagram.com//">
          {/* <span className="fa-stack fa-lg ig combo"> */}
          <span className={styles.combo + " " + styles.ig + " fa-stack fa-lg"}>
            <i className={"fa fa-circle fa-stack-2x " + styles.circle}></i>
            <i
              className={
                "fa fa-instagram fa-stack-1x fa-inverse " + styles.icon
              }
            ></i>
          </span>
        </a>
        <a href="https://www.facebook.com//">
          <span className={styles.combo + " " + styles.fb + " fa-stack fa-lg"}>
            <i className={"fa fa-circle fa-stack-2x " + styles.circle}></i>
            <i
              className={"fa fa-facebook fa-stack-1x fa-inverse " + styles.icon}
            ></i>
          </span>
        </a>
        <a href="https://www.youtube.com//">
          <span className={styles.combo + " " + styles.yt + " fa-stack fa-lg"}>
            <i className={"fa fa-circle fa-stack-2x " + styles.circle}></i>
            <i
              className={
                "fa fa-youtube-play fa-stack-1x fa-inverse " + styles.icon
              }
            ></i>
          </span>
        </a>
        <a href="https://twitter.com/developer_sah">
          <span className={styles.combo + " " + styles.tw + " fa-stack fa-lg"}>
            <i className={"fa fa-circle fa-stack-2x " + styles.circle}></i>
            <i
              className={"fa fa-twitter fa-stack-1x fa-inverse " + styles.icon}
            ></i>
          </span>
        </a>
      </div>
      <p style={{ color: "white", marginhrefp: "2%" }}>
        Designed By AlphaQMASM
      </p>
    </div>
  );
};

export default Footer;
