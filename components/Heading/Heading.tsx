import React from "react";
import { IoArrowForward } from "react-icons/io5";
import styles from "./heading.module.css";

const Heading = ({ title, trailingText }: any) => {
    return (
        <header className={styles.heading}>
            <div className={styles.headingContainer}>
                <h6 className={styles.pageTitle}>{title}</h6>
                {trailingText && (
                    <div className={styles.trailingComponent}>
                        <div className={styles.buttonContent}>
                            <div className={styles.buttonText}>{trailingText}</div>
                            <IoArrowForward size={16} />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Heading;
