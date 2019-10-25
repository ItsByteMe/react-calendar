import React from 'react';
import Event from './Event';
import './Events.css'
import { eventsList } from '../eventsList';
import AddEvent from './AddEvent';

const Events = ({ Month }) => {
    const eventsToShow = eventsList.filter(event => event.month === Month)

    const eventsComponent = eventsToShow.map(i => {
        return (
            <Event month = {Month} day = {i.day + 1} name = {i.name} />
        )
    })

    return (

        <ul className = 'Events'>
            <p>Events</p>
            {eventsComponent}
            < AddEvent />
        </ul>
    )
}

export default Events;