
import styles from "./../event_details.module.css"
import utilStyles from "./../../../app/utils.module.css"
import { fetchEvents } from '../../../utils/fetchApi';
import { AboutEvent, EventBrief, EventLocation, Pricing, RefundPolicy, Tags } from "../../../containers";

async function getEventDetails() {
    let eventDetails: any;
    await fetchEvents().then((events) => {
        const details = events.find((event: { id: Number }) => event.id === Number("781431"));
        eventDetails = details;
        // return details;
    })
    return eventDetails;
}

export default async function EventDetails() {
    const event = await getEventDetails();
    // console.log(event);

    return (
        <>
            {/* <HeaderImage event={event} /> */}
            <div className={styles.mainAndAside}>
                <div className={`${styles.mainAndAsideContent} ${utilStyles.sectionPadding}`}>
                    <div className={styles.main}>
                        <EventBrief event={event} />
                        <EventLocation event={event} />
                        <AboutEvent event={event} />
                        <RefundPolicy event={event} />
                        <Tags event={event} />
                    </div>
                    <div className={styles.aside}>
                        <Pricing event={event} />
                    </div>
                </div>
            </div>
        </>
    )
}
