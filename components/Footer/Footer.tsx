import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import utilStyles from "./../../app/utils.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={`${styles.footerContainer} ${utilStyles.sectionPadding}`}>
        <div className={styles.footerTop}>
          <div className={styles.logoContainer}>
            {/* <Image
              src="/vercel.svg"
              alt="Raver Logo"
              className={styles.footerLogo}
              width={100}
              height={24}
              priority
            /> */}
            <h5 style={{ display: "flex" }}><h5 style={{ color: "var(--primary-color)" }}>R</h5>aver</h5>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <IoLogoFacebook />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <IoLogoTwitter />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <IoLogoInstagram />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <IoLogoYoutube />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <IoLogoTiktok />
            </a>
          </div>
        </div>
        <div className={styles.mainNav}>
          <div className={styles.navList}>
            <span className={styles.navListHeader}>
              Raver
            </span>
            <ul className={styles.navListLinks}>
              <li className={styles.navListItem}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  How it Works
                </a>
              </li>
              <li className={styles.navListItem}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Host an event
                </a>
              </li>
              <li className={styles.navListItem}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Content Standards
                </a>
              </li>
              <li className={styles.navListItem}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Help/FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.navList}>
            <span className={styles.navListHeader}>
              Resources
            </span>
            <ul className={styles.navListLinks}>
              <li className={styles.navListItem}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>
              <li className={styles.navListItem}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>
              <li className={styles.navListItem}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>
              <li className={styles.navListItem}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.navList}>
            <span className={styles.navListHeader}>
              Resources
            </span>
            <ul className={styles.navListLinks}>
              <li className={styles.navListItem}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>
              <li className={styles.navListItem}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>
              <li className={styles.navListItem}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>
              <li className={styles.navListItem}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.navList}>
            <span className={styles.navListHeader}>
              Company
            </span>
            <ul className={styles.navListLinks}>
              <li className={styles.navListItem}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  About
                </a>
              </li>
              <li className={styles.navListItem}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <ul className={styles.footerLinks}>
            <li className={styles.linkItem}>
              <Link href="/terms">
                <span>Terms of Use</span>
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/privacy">
                <span>Privacy Policy</span>
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/cookies">
                <span>Cookie Policy</span>
              </Link>
            </li>
          </ul>
          <small className={styles.copyright}>
            &copy; Copyright Raver {currentYear}. All rights reserved.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
