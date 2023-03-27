import React from "react";
import styles from "./cta.module.css";
import utilStyles from "./../../app/utils.module.css";

const CTA = () => {
    return (
        <div className={styles.cta}>
            <div className={styles.ctaContainer}>
                <div className={styles.ctaImg} />
                <section>
                    <div className={`${styles.ctaText}`}>
                        <span className={styles.titleText}>Work with us</span>
                        <h3>More than ticketing</h3>
                        <p className={styles.description}>For the world's best venues, promoters and festivals, a partnership with Raver is so much more than just ticketing.</p>
                        <button className={`${utilStyles.btnElevated} ${utilStyles.btnLg}`}>Learn more</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CTA;
// import React from "react";
// import styles from "./../styles/cta.module.css";
// import utilStyles from "./../styles/utils.module.css";

// const CTA = () => {
//     return (
//         <div className={styles.cta}>
//             <div className={styles.ctaContainer}>
//                 <section className={utilStyles.sectionPadding}>
//                     <div className={styles.ctaText}>
//                         <p className={styles.titleText}>Work with us</p>
//                         <h3>More than ticketing</h3>
//                         <p>For the world's best venues, promoters and festivals, a partnership with Raver is so much more than just ticketing.</p>
//                         <button className={`${utilStyles.btnElevated} ${utilStyles.btnLg}`}>Learn more</button>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default CTA;
