import React, { useState } from 'react';
import Accordion from '../Accordion';
import Route from '../Route';
import { accordionItems, dropDownOptions, timelineData } from '../../data/data';
import Header from '../Header';
import Search from '../Search';
import Dropdown from '../Dropdown';
import './app.css';
import Timeline from '../Timeline/Timeline';

const App = () => {
    const [selected, setSelected] = useState(dropDownOptions[0]);

    // Sort timeline array by date
    const sortedtimeLineData = timelineData.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    );

    const timelineStyles = {
        color: '#333',
        titleColor: '#cc0000',
        overlayColor: 'rgba(0,0,0,0.8)',
    };

    return (
        <div className="ui container">
            <Header />
            <Route path="/">
                <h3 className="ui header widget-title">Accordion</h3>
                <Accordion items={accordionItems} />
            </Route>
            <Route path="/search">
                <h3 className="ui header widget-title">Search</h3>
                <Search />
            </Route>
            <Route path="/dropdown">
                <h3 className="ui header widget-title">Dropdown</h3>
                <Dropdown
                    options={dropDownOptions}
                    title="Select a color"
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/timeline">
                <h3 className="ui header widget-title">Timeline</h3>
                <Timeline
                    data={sortedtimeLineData}
                    timeLineStyle={timelineStyles}
                />
            </Route>
        </div>
    );
};

export default App;
