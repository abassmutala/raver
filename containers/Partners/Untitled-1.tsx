// async function getEventDetails() {
//   fetchEvents().then((events) => {
//     const details = events.find((event: { id: Number }) => event.id === Number(id));
//   }
// }

import React from "react"

const EventDetails = () => {
  // const [event, setEvent] = useState();
  // const [isLoading, setIsLoading] = useState(false)
  // const router = useRouter();
  // const { query: { name, id }, } = router

//   useEffect(() => {
//     setIsLoading(true)
//     )

// }, [id])

return (
  <React.Fragment>
    {/* <Head>
      <title>Raver | {name}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head> */}
    {/* <Navbar />
    <HeaderImage event={event} isLoading={false} />
    <div className={styles.mainAndAside}>
      <div className={`${styles.mainAndAsideContent} ${utilStyles.sectionPadding}`}>
        <div className={styles.main}>
          <EventBrief event={event} isLoading={false} />
          <EventLocation event={event} isLoading={false} />
          <AboutEvent event={event} isLoading={false} />
          <RefundPolicy event={event} isLoading={false} />
          <Tags event={event} isLoading={false} />
        </div>
        <div className={styles.aside}>
          <Pricing event={event} isLoading={false} />
        </div>
      </div>
    </div>
    <Footer /> */}
  </React.Fragment>
)
}

export default EventDetails