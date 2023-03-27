import React from 'react'
import styles from "./header.module.css";
import utilStyles from "./../../app/utils.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.foregroundOverlay}>
                <div className={styles.headerContainer}>
                    <section>
                        <div className={styles.headerText}>
                            {/* <h3>The <h3 className={styles.highlightedText}>`floor`</h3> is yours!</h3> */}
                            <h3>The `floor` is yours!</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem pariatur vitae beatae eligendi voluptatibus autem temporibus praesentium earum neque tenetur deleniti aperiam molestiae, rerum similique magni nisi dolor repellat modi.</p>
                            <button type="submit" className={`${utilStyles.btnElevated} ${utilStyles.btnLg}`}>Get Started</button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Header;