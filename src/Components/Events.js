import React from 'react';
import Event from './Event';
import './Events.css'
import { eventsList } from '../eventsList';

const Events = ({ Month }) => {
    console.log(Month);
    const eventsToShow = eventsList.filter(event => event.month == Month)
    console.log(eventsToShow)

    const eventsComponent = eventsToShow.map(i => {
        return (
            <Event month = {Month} day = {i.day + 1} name = {i.name} />
        )
        console.log(i);
    })

    return (

        <ul className = 'Events'>
            <p>Events</p>
            {eventsComponent}
        </ul>
    )
}

export default Events;