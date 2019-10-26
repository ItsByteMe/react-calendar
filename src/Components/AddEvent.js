import React from 'react';
import Event from './Event';
import './Events.css'
import { eventsList } from '../eventsList';

const AddEvent = ({ submitNewEvent, inputDayHandler, inputNameHandler} ) => {
    return (
        <div>
            <p>Add Event:</p>
            Event Day: <input name="day" type="number" onChange = {inputDayHandler}></input>
            <br></br>
            Event Name: <input name="name" type="text" onChange = {inputNameHandler}></input>
            <br></br>
            <input type="submit" onClick = {submitNewEvent}/>
        </div>
    )
}

export default AddEvent;