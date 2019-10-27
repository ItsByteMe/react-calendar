import React from 'react';
import Event from './Event';
import './Events.css'

const Events = ({ Month, eventsList, deleteFunc }) => {
    // localStorage.setItem('myData', JSON.stringify(eventsToShow));
    // const xx = localStorage.getItem('myData');
    // console.log(JSON.parse(xx))

    const eventsComponent = eventsList.map((event, index) => {
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