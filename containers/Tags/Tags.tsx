import React from 'react'
import styles from "./tags.module.css"
import utilStyles from "./../../app/utils.module.css"
import { Heading } from '../../components'

type EventTagsProps = {
    event: any,
    // isLoading: boolean
}

const Tags = ({ event }: EventTagsProps) => {
    // if (isLoading) {
    //     return (<div className={styles.tags}>
    //         <div className={`${utilStyles.skeleton} ${utilStyles.headingSkeleton}`}></div>
    //     </div>)
    // }
    return (
        <div className={styles.tags}>
            <div className={styles.tagsContent}>
                <Heading title="Tags" />
            </div></div>
    )
}

export default Tags