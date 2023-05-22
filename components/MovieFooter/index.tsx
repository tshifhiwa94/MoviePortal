import React from "react";
import styles from "./Footer.module.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <ul className={styles.box}>
            <li>Made with Love by Tshifhiwa Kupane</li>
          </ul>
        </div>
        <div className={styles.box}>
          <h3>Follow Us</h3>
          <div className={styles.icons}>
            <YoutubeOutlined className={styles.icon} />
            <LinkedinOutlined className={styles.icon} />
            <InstagramOutlined className={styles.icon} />
            <FacebookOutlined className={styles.icon} />
            <TwitterOutlined className={styles.icon} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

