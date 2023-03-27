import styles from "./event_brief.module.css";
import utilStyles from "./../../app/utils.module.css";

export type EventBriefProps = {
  event: any,
  // isLoading: boolean
}

const EventBrief = ({ event }: EventBriefProps) => {
  // if (isLoading) {
  //   return (
  //     <div className={styles.eventBrief}>
  //       <div
  //         className={styles.eventBriefContainer}
  //       >
  //         <section className={styles.briefText}>
  //           <div className={`${utilStyles.skeleton} ${utilStyles.headingSkeleton}`}></div>
  //           <div className={`${utilStyles.skeleton} ${utilStyles.headingSkeleton}`}></div>
  //           {/* <span className={styles.eventCollectionName}>
  //           Part of the MLLE tour collection
  //         </span> */}
  //           <span className={styles.eventDescription}>
  //             <div className={`${utilStyles.skeleton} ${utilStyles.textSkeleton}`}></div>
  //             <div className={`${utilStyles.skeleton} ${utilStyles.textSkeleton}`}></div>
  //             <div className={`${utilStyles.skeleton} ${utilStyles.textSkeleton}`}></div>
  //             <div className={`${utilStyles.skeleton} ${utilStyles.textSkeleton}`}></div>
  //           </span>
  //           <div className={styles.eventOrganisers}>
  //             <div className={`${utilStyles.skeleton} ${utilStyles.avatarSkeleton}`} style={{ height: "4rem", marginRight: "1rem" }}></div>
  //             <div className={styles.orgainserNameAndFollowers} style={{ width: "35%" }}>

  //               <div className={`${utilStyles.skeleton} ${utilStyles.headingSkeleton}`}></div>
  //               <div className={`${utilStyles.skeleton} ${utilStyles.textSkeleton}`}></div>
  //               <div className={`${utilStyles.skeleton} ${utilStyles.textSkeleton}`}></div>
  //             </div>
  //           </div>
  //         </section>
  //       </div>
  //     </div>);
  // }
  return (
    <div className={styles.eventBrief}>
      <div
        className={styles.eventBriefContainer}
      >
        <section className={styles.briefText}>
          {<h2 className={styles.eventName}>{event?.name}</h2>}
          {/* <span className={styles.eventCollectionName}>
            Part of the MLLE tour collection
          </span> */}
          <span className={styles.eventDescription}>
            {event?.description}
          </span>
          <div className={styles.eventOrganisers}>
            <div className={styles.organiserAvatar}></div>
            <div className={styles.orgainserNameAndFollowers}>
              <span className={styles.organiserName}>
                {event?.username}
              </span>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <small className={styles.organiserFollowers}>
                  1.6M followers
                </small>
                <button className={styles.button}>Follow</button></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventBrief;
