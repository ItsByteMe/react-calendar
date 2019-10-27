import React from 'react';
import './AddEvent.css'

const AddEvent = ({ submitNewEvent, inputDayHandler, inputNameHandler} ) => {
    return (
        <div className = 'addEvents'>
            <p>Add Event:</p>
            Event Day: <input name="day" type="number" onChange = {inputDayHandler}></input>
            <br></br>
            Event Name: <input name="name" type="text" onChange = {inputNameHandler}></input>
            <br></br>
            <input className = "submitButton" type="submit" onClick = {submitNewEvent}/>
        </div>
    )
}

export default AddEvent;