import React from "react";
import Heading from "../../components/Heading/Heading";
import styles from "./pricing.module.css";
import utilStyles from "./../../app/utils.module.css";

type PricingProps = {
  event: any,
  // isLoading: boolean
}

const Pricing = ({ event }: PricingProps) => {
  // if (isLoading) {
  //   return (
  //     <div className={styles.pricing}>
  //       <div className={styles.pricingContent}>
  //       <div className={`${utilStyles.skeleton} ${utilStyles.headingSkeleton}`}></div>
  //       </div>
  //     </div>
  //   )
  // }
  return (
    <div className={styles.pricing}>
      <div className={styles.pricingContent}>
        <Heading title="Pricing" />
      </div>
    </div>
  );
};

export default Pricing;
