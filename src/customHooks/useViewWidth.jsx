import { useEffect, useState } from 'react';

/**
 *
 * Custom Hooks which returns result of screen size change as true or false according to mediaQueryCondition
 * @param {string} mediaQueryCondition - Media Query Condition '(min-width:600px)'
 * @returns {boolean}  true or false as a result of screen size checking
 */

export function useViewWidth(mediaQueryCondition) {
    const [isMatchSize, setIsMatchSize] = useState(undefined);

    useEffect(() => {
        window
            .matchMedia(mediaQueryCondition)
            .addEventListener('change', (event) => {
                setIsMatchSize(event.matches);
            });
        return () => {
            window
                .matchMedia(mediaQueryCondition)
                .addEventListener('change', (event) => {
                    setIsMatchSize(event.matches);
                });
        };
    }, [mediaQueryCondition]);

    if (isMatchSize === undefined)
        return window.matchMedia(mediaQueryCondition).matches;

    return isMatchSize;
}
