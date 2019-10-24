import React from 'react';

const Event = ({ month, day, name }) => {
    let mName = '';
    console.log(month)
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
    }

    let suffix = '';

    if (day == 1) {
        suffix = 'st';
    } else if (day == 2) {
        suffix = 'nd';
    } else if (day == 3) {
        suffix = 'rd';
    } else {
        suffix = 'th';
    }


    return (
        <li>{mName} the {day}{suffix}, {name}</li>
    )
}

export default Event;