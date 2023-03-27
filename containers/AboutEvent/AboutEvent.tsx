import React from "react";
import Heading from "../../components/Heading/Heading";
import styles from "./aboutEvent.module.css";

type AboutEventProps = {
  event: any,
  // isLoading: boolean
}

const AboutEvent = ({ event }: AboutEventProps) => {
  if (!event?.video) return <></>;
  return (
    <div className={styles.aboutEvent}>
        <Heading title="About this event" />
        <div className={styles.eventVideo}>
          <iframe
            width="100%"
            src={event?.video}
            frameBorder="0"
            style={{ aspectRatio: "16/9", borderRadius: "1rem" }}
          ></iframe>
      </div>
    </div>
  );
};

export default AboutEvent;
