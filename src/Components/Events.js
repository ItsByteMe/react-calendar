import React from 'react';
import Event from './Event';
import './Events.css'
import { eventsList } from '../eventsList';

const Events = ({ Month, eventsList }) => {
    // const eventsToShow = eventsList.filter(event => event.month === Month)
    // localStorage.setItem('myData', JSON.stringify(eventsToShow));
    // const xx = localStorage.getItem('myData');
    // console.log(JSON.parse(xx))

    const eventsComponent = eventsList.map(i => {
        console.log(i);
        return (   
            <Event month = {Month} day = {i.day + 1} name = {i.name} />
        )
    })

    return (
        <ul className = 'Events'>
            <p>Events</p>
            {eventsComponent}
        </ul>
    )
}

export default Events;