import React from "react";
import { Heading } from "../../components";
import styles from "./refund_policy.module.css";
import utilStyles from "./../../app/utils.module.css";

type RefundPolicyProps = {
  event: any,
  // isLoading: boolean
}

const RefundPolicy = ({ event }: RefundPolicyProps) => {
  // if (isLoading) {
  //   return (
  //     <div className={styles.refundPolicy}>
  //         <section>
  //           <div className={`${utilStyles.skeleton} ${utilStyles.headingSkeleton}`}></div>
  //           <ul>
  //             <div className={`${utilStyles.skeleton} ${utilStyles.textSkeleton}`}></div>
  //             <div className={`${utilStyles.skeleton} ${utilStyles.textSkeleton}`}></div>
  //             <div className={`${utilStyles.skeleton} ${utilStyles.textSkeleton}`}></div>
  //           </ul>
  //         </section>
  //     </div>
  //   )
  // }
  return (
    <div className={styles.refundPolicy}>
      <div className={styles.refundPolicyContent}>
        <section>
          <Heading title="Refund Policy" />
          <ul>
            <li>No refund</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
