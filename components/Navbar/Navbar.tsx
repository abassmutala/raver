import {
    IoGlobeOutline,
    IoMenuOutline,
    IoSearchOutline,
} from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import utilStyles from "./../../app/utils.module.css";
import NavbarSearchBox from "../NavbarSearchBox/NavbarSearchBox";

const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.logoAndSearch}>
                    <div id={styles.logo}>
                        <Link href="/">
                            <h5 style={{display: "flex"}}><h5 style={{color: "var(--primary-color)"}}>R</h5>aver</h5>
                            {/* <Image
                                src="/vercel.svg"
                                alt="Raver Logo"
                                width={100}
                                height={24}
                                priority
                            /> */}
                        </Link>
                    </div>
                    <NavbarSearchBox />
                </div>
                <div className={styles.links}>
                    <div className={styles.navLinks}>
                        <Link href="/">
                            <span className={styles.link}>Host an event</span>
                        </Link>
                        <Link href="/">
                            <span className={styles.link}>Help</span>
                        </Link>
                    </div>
                    <div className={styles.linkSectionDivider} />
                    <div className={styles.quickLinks}>
                        <button className={utilStyles.btnFlat}>
                            <div className={styles.languageButtonContent}>
                                <IoGlobeOutline size={16} />
                                &nbsp;EN
                            </div>
                        </button>
                        <button className={utilStyles.btnElevated}>Sign in</button>
                    </div>
                </div>
                <div className={styles.mobileButtons}>
                    <a href="/" className={styles.searchButton}>
                        <IoSearchOutline />
                    </a>
                    <a href="/" className={styles.menuButton}>
                        <IoMenuOutline />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
