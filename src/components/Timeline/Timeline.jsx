import React from 'react';
import PropTypes from 'prop-types';
import { useStylesTimeline } from './timeline.style.js';
import TimelineComponent from '../TimelineComponent/TimelineComponent.jsx';
import Link from '../Link/Link.jsx';

function Timeline({ data, timeLineStyle }) {
    const classes = useStylesTimeline(timeLineStyle);

    if (!data || data.length === 0) return null;

    return (
        <>
            <div className={classes.timelineContainer}>
                <div className={classes.timelineBar}>
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className={`${classes.timelinePoint} ${classes.pointSpaces}`}
                        ></div>
                    ))}
                </div>
                <div className={classes.timelineItemContainer}>
                    {data.map(({ id, url, label, image }, index) => {
                        return (
                            <TimelineComponent
                                className={`${classes.timelineItem} ${
                                    index % 2 === 0
                                        ? classes.timelineItemLeft
                                        : classes.timelineItemRight
                                }`}
                                key={id}
                                href={url}
                                component={Link}
                            >
                                <img
                                    src={image}
                                    className={classes.timelineItemImage}
                                    alt={label}
                                />
                                <span className={classes.timelineItemLabel}>
                                    {label}
                                </span>
                            </TimelineComponent>
                        );
                    })}
                </div>
            </div>
            <h2 className={classes.timelineNotification}>
                This Feature Only Works In Desktop Screens
            </h2>
        </>
    );
}

Timeline.propTypes = {
    data: PropTypes.array.isRequired,
    timeLineStyle: PropTypes.object,
};

export default Timeline;
