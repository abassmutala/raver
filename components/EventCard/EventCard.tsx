import React from "react";
import styles from "./event_card.module.css";
import Link from "next/link";

export type EventCardProps = {
  id: String;
  image: String;
  name: String;
  location: String;
  date: Date;
  time: Date;
  host: String;
  prices: { price: String }[];
  followerCount: String;
};

const EventCard = ({
  id,
  image,
  name,
  location,
  date,
  time,
  host,
  prices,
  followerCount,
}: EventCardProps) => {

  function addLeadingZero(num: number, totalLength: number) {
    return String(num).padStart(totalLength, "0");
  }
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const eventDate = addLeadingZero(date.getDate(), 2);
  const monthIndex = date.getMonth();
  const month = monthNames[monthIndex];
  const eventTime = `${date.getHours()}:${date.getMinutes()}0`;
  function getEventPrices() {
    let eventPrices;
    if (prices.length < 1) {
      eventPrices = "Not specified"
    } else
      if (prices.length > 1) {
        eventPrices = `Starts at NZ$ ${prices[0]?.price}`;
      } else {
        eventPrices = `NZ$ ${prices[0]?.price}`
      }
    return eventPrices;
  }

  return (
    // <Link href={{ pathname: `/event-details/${name}`, query: { name: name.toString(), id: id.toString() } }}>
    <Link href={`/event-details/${id}`}>
      <div className={styles.eventCard}>
        <div
          className={styles.eventImage}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div className={styles.eventInfo}>
          <p className={styles.eventName}>{name}</p>
          <span className={styles.location}>{location}</span>
          {/* day}, {month} {date} &bull; {eventTime} */}
          <span className={styles.datetime}>{month} {eventDate} &nbsp;&bull;&nbsp;{eventTime}</span>
          <span className={styles.price}>{getEventPrices()}</span>
          {/* <div className={styles.hostInfo}>
          <div className={styles.hostAvatar}>
            <IoPersonOutline />
          </div>
          <a href="/" className={styles.hostName}>
            <span className={styles.name}>{host}</span>
            <span className={styles.followers}>{followerCount} followers</span>
          </a>
        </div> */}
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
