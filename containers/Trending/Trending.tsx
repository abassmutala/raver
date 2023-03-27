"use client"

import React from "react";
import styles from "./trending.module.css";
import utilStyles from "./../../app/utils.module.css";
import Tabs from "../../components/Tabs/Tabs";
import { trendingEvents } from "../../test/data";
import Heading from "../../components/Heading/Heading";
import { EventCard } from "../../components";

const Trending = () => {
  const today: Date = new Date();

  const TrendingEvents = () => {
    return (
      <div className={styles.trendingEventsList}>
        {trendingEvents.map((event, i) => (
          <EventCard key={i}
            id={i.toString()}
            image={event.image}
            name={event.name}
            location={event.location}
            date={event.date}
            time={event.time}
            host=""
            followerCount={""}
            prices={[]} />
        ))}
      </div>
    );
  };

  const tabs = [
    { id: "all", name: "All", children: <><TrendingEvents /></> },
    { id: "today", name: "Today", children: <>Happening today</> },
    { id: "tomorrow", name: "Tomorrow", children: <>Happening tomorrow</> },
    {
      id: "weekend",
      name: "This weekend",
      children: <>Happening this weekend</>,
    },
    { id: "online", name: "Online", children: <>Online and virtual events</> },
    { id: "free", name: "Free", children: <>Free</> },
  ];

  return (
    <div className={styles.trending}>
      <div
        className={`${styles.trendingContainer} ${utilStyles.sectionPadding}`}
      >
        <section>
          <Heading title="Explore trending events" />
          <div className={styles.trendTabs}>
            <Tabs tabs={tabs} />
            {/* <Provider defaultColorScheme="light" theme={lightTheme}>
            <Tabs flex={false}>
              <TabList>
                {tabs.map((tab) => {
                  return (
                    <Item key={tab.id}>
                      <span className={styles.tabName}>{tab.name}</span>
                    </Item>
                  );
                })}
              </TabList>
              <TabPanels>
                {tabs.map((tab) => {
                  return (
                    <Item key={tab.id}>
                      <div className={styles.tabContent}>{tab.children}</div>
                    </Item>
                  );
                })}
              </TabPanels>
            </Tabs>
          </Provider> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Trending;
