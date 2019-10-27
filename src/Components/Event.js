import React from 'react';

const Event = ({ month, day, name, index, deleteFunc }) => {
    let mName = '';
    switch(month) {
        case 0:
            mName = 'January';
            break;
        case 1:
            mName = 'February';
            break;
        case 2:
            mName = 'March';
            break;
        case 3:
            mName = 'April';
            break;
        case 4:
            mName = 'May';
            break;
        case 5:
            mName = 'June';
            break;
        case 6:
            mName = 'July';
            break;
        case 7:
            mName = 'August';
            break;
        case 8:
            mName = 'September';
            break;
        case 9:
            mName = 'October';
            break;
        case 10:
            mName = 'November';
            break;
        case 11:
            mName = 'December';
            break;
        default: 
            mName = 'Unkown Month';
            break;
    }

    let suffix = '';

    if (day === 1) {
        suffix = 'st';
    } else if (day === 2) {
        suffix = 'nd';
    } else if (day === 3) {
        suffix = 'rd';
    } else {
        suffix = 'th';
    }


    return (
       // <li>{mName} the {day}{suffix}, {name} <button eday = {day} emonth = {month} ename = {name} eindex = {index} onClick = {deleteFunc}>&#215;</button></li>
       <li>{mName} the {day}{suffix}, {name} <button onClick = {() => deleteFunc(index)}>&#215;</button></li>
    )
}

export default Event;