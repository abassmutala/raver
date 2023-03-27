import styles from "./../Trending/trending.module.css";
import utilStyles from "./../../app/utils.module.css";
import Heading from "../../components/Heading/Heading";
import { fetchEvents } from "../../utils/fetchApi";
import { EventCard } from "../../components";
// import { EventCard } from "../../components";

// export async function getServerSideProps() {
//   const events = await fetchEvents().then(data => {
//     return data;
//   });
//   return {
//     props: {
//       events: events,
//     }
//   }
// }

async function getEvents() {
  const res = await fetchEvents();
  return res;
}


export default async function MoreEvents () {
  const events = await getEvents();

  return (
    <div className={styles.trending}>
      <div
        className={`${styles.trendingContainer} ${utilStyles.sectionPadding}`}
      >
        <section>
          <Heading title="Discover more events" trailingText="View more" />
          <div className={styles.trendTabs}>
            <div className={styles.trendingEventsList}>
              {events?.slice(0, 9).map((event: any) => {
                const eventPrices = event.ticket_types["ticket_types"]; //[0]?.price; 
                return <EventCard
                  key={event.id}
                  id={event.id}
                  image={event.images["images"][0]["transforms"]["transforms"]["4"]?.url}
                  name={event.name}
                  location={event.location_summary}
                  date={new Date(event.datetime_start)}
                  time={new Date(event.datetime_start)}
                  followerCount="1"
                  host={event.username}
                  prices={eventPrices}
                />
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
