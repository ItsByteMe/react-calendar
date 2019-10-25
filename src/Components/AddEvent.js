import React from 'react';
import Event from './Event';
import './Events.css'
import { eventsList } from '../eventsList';

const AddEvent = () => {
    return (
        <div>
            <p>Add Event:</p>
            <form>
                Event Name: <input type="text"></input>
                <br></br>
                Event Day: <input type="text"></input>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    )
}

export default AddEvent;