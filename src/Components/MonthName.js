import React from 'react';
import './MonthName.css'

const MonthName = ({ Month, pressRight, pressLeft}) => {
    return (
        <div className = 'monthName'>
            <ul>
                <li className="prev"><button onClick={ pressLeft }>&#10094;</button></li>
                <li className="next"><button onClick={ pressRight }>&#10095;</button></li>
                <li>{ Month }</li>
            </ul>
        </div>
    )
}

export default MonthName;