"use client"

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React from "react";
import { IoLocation } from "react-icons/io5";
import Heading from "../../components/Heading/Heading";
import styles from "./event_location.module.css";
import utilStyles from "./../../app/utils.module.css";

type EventLocationProps = {
  event: any,
  // isLoading: boolean
}

const EventLocation = ({ event }: EventLocationProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });

  const zoom = 16.0;

  const containerStyle = {
    width: "100%",
    aspectRatio: 3 / 1,
    borderRadius: "12px",
  };

  // if (isLoading) {
  //   return (
  //     <div className={styles.eventLocation}>
  //         <div className={`${utilStyles.skeleton} ${utilStyles.headingSkeleton}`} />
  //         <div className={`${utilStyles.skeleton} ${utilStyles.textSkeleton}`} style={{ marginTop: "1rem" }} />
  //         <div className={`${utilStyles.skeleton} ${utilStyles.textSkeleton}`} />
  //         <div className={`${utilStyles.skeleton} ${utilStyles.textSkeleton}`} />
  //         <div className={`${utilStyles.skeleton} ${utilStyles.blockSkeleton}`} style={{ height: "16rem", marginTop: "2rem" }} />
        
  //     </div>
  //   );
  // };


  return (
    <div className={styles.eventLocation}>
      <div className={styles.eventLocationContent}>
        <Heading title="When and where" />
        <div className={styles.location}>
          <div className={styles.iconContainer}>
            <IoLocation className={styles.descriptiveIcon} />
          </div>
          <address className={styles.address}>
            {event?.location["summary"]}
          </address>
        </div>
        {isLoaded && (
          <GoogleMap
            center={event?.location["point"]}
            zoom={zoom}
            mapContainerStyle={containerStyle}
            options={{ disableDefaultUI: true /*styles: mapStyle*/ }}
          >
            <Marker position={event?.location["point"]} />
          </GoogleMap>
        )}
      </div>
    </div>
  );
}


export default EventLocation;
