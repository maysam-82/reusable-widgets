import { createUseStyles } from 'react-jss';

export const useStylesTimeline = createUseStyles({
    pointSpaces: {
        marginTop: `9rem`,
        '&:first-child': {
            marginTop: 0,
        },
        '&:nth-child(2n)': {
            marginTop: `18rem`,
        },
    },
    timelineContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '0.625rem',
    },
    timelineBar: {
        width: '0.25rem',
        backgroundColor: (style) =>
            style && style.color ? style.color : '#ccc',
        height: '100%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        position: 'absolute',
    },
    timelinePoint: {
        height: '2rem',
        width: '2rem',
        borderRadius: '50%',
        backgroundColor: (style) =>
            style && style.color ? style.color : '#ccc',
        transform: 'translate(calc(-50% + 0.125rem), 0)',
        '&::after': {
            content: '""',
            width: '50%',
            height: '50%',
            borderRadius: '50%',
            position: 'absolute',
            backgroundColor: '#fff',
            zIndex: '2',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },
    },
    timelineItemContainer: {
        width: '100%',
        left: 0,
        top: 0,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    timelineItem: {
        width: 'calc(50% - 3rem)',
        padding: '0.625rem',
        height: `22rem`,
        marginBottom: `9rem`,
        position: 'relative',
        backgroundColor: (style) =>
            style && style.color ? style.color : '#ccc',
        '&::after': {
            position: 'absolute',
            content: '""',
            width: '0px',
            height: '0px',
            borderTop: '1rem solid transparent',
            borderBottom: '1rem solid transparent',
        },
    },
    timelineItemLeft: {
        '&::after': {
            top: '0',
            right: '-2.5rem',
            zIndex: -1,
            borderLeft: '1.25rem solid',
            borderLeftColor: (style) =>
                style && style.color ? style.color : '#ccc',
            borderRight: '1.25rem solid transparent',
        },
    },
    timelineItemRight: {
        '&::after': {
            bottom: '0',
            left: '-2.5rem',
            zIndex: -1,
            borderLeft: '1.25rem solid transparent',
            borderRight: '1.25rem solid ',
            borderRightColor: (style) =>
                style && style.color ? style.color : '#ccc',
        },
    },
    timelineItemImage: {
        display: 'block',
        width: '100%',
        height: '100%',
    },
    timelineItemLabel: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        padding: '1rem',
        backgroundColor: (style) =>
            style && style.overlayColor
                ? style.overlayColor
                : 'rgba(0,0,0,0.5)',
        fontSize: '2rem',
        display: 'block',
        color: (style) =>
            style && style.titleColor ? style.titleColor : '#fff',
    },
});
