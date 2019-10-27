import React from 'react';
import Event from './Event';
import './Events.css'

const Events = ({ Month, eventsList, deleteFunc }) => {
    const eventsComponent = eventsList.map((event, index) => {
        console.log("printing")
        return (   
            <Event month = {Month} day = {event.day + 1} name = {event.name} index = {index} deleteFunc = {deleteFunc}/>
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