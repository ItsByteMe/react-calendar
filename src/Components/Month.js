import React from 'react';
import Day from './Day'
import './Month.css'

const Month = ({ Month }) => {
    const mDays = Array.from(Array(Month.days).keys());
    if(mDays[0] !== Month.firstWeekday) {
        const dayDiff = Month.firstWeekday - mDays[0];
        for(let i = 0; i < dayDiff; i++) {
            mDays.unshift(undefined)
        }
    }
    const monthComponent = mDays.map((i) => {
        return (
            <Day dayNumber = {i+1}/>
        )
    })

    return(
        <ul className = 'Month'>
            {monthComponent}
        </ul>
    )
}

export default Month;