import React from 'react';
import { useViewWidth } from '../../customHooks/useViewWidth';
import Link from '../Link/Link';
import './header.css';

const Header = () => {
    const isMobileView = useViewWidth('(max-width: 960px)');

    return (
        <div className="header-container">
            <Link href="/" className="ui secondary button">
                Accordion
            </Link>
            <Link href="/search" className="ui secondary button">
                Search
            </Link>
            <Link href="/dropdown" className="ui secondary button">
                Dropdown
            </Link>

            {!isMobileView ? (
                <Link href="/timeline" className="ui secondary button">
                    Timeline
                </Link>
            ) : null}
        </div>
    );
};

export default Header;
