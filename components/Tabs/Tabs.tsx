import React from 'react'
import styles from "./tabs.module.css"

type TabProps = {
    tabs: {
        id: string;
        name: string;
        children: JSX.Element;
    }[]
}
// let initialIndex: any = {};

const Tabs = ({ tabs }: TabProps) => {
    const [activeTab, setActiveTab] = React.useState(0);
    return (
        <div className={styles.tabContainer}>
            <div className={styles.tabButtons}>
                <ul aria-label="Tabs">
                    {tabs.map((tab: {
                        id: string;
                        name: string;
                        children: JSX.Element;
                    }, i: number) => (
                        <li
                            key={tab.id}
                            className={`${activeTab === i ? `${styles.activeTab}` : `${styles.inactiveTab}`}`}
                            onClick={() => setActiveTab(i)}
                        >
                            <span>{tab.name}</span>
                        </li>
                    ))}
                    <div className={styles.underBar} />
                </ul>
            </div>
            <div className={styles.tabOutlet}>
                {tabs.map((tab: {
                    id: string;
                    name: string;
                    children: JSX.Element;
                }, i: number) => activeTab === i && <div key={i} className={styles.tabContent}>{tab.children}</div>)}
            </div>
        </div>
    )
}

export default Tabs