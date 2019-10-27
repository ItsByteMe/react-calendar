import React from 'react';
import Annotation from '../Components/Annotation';
import MonthName from '../Components/MonthName';
import Month from '../Components/Month';
import Events from '../Components/Events';
import AddEvent from '../Components/AddEvent';
import { months2019 } from '../months2019';
import { eventsList } from '../eventsList';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            mIndex: 0,
            month: '',
            eventsToRender: [],
            eventDay: undefined,
            eventName: ''
        }
    }
    
    componentDidMount = () => {
        this.setState({eventsToRender: eventsList.filter(event => event.month === this.state.mIndex)})

    }

    onPressLeft = (event) => {
        if (this.state.mIndex !== 0) {
            this.setState({ mIndex: this.state.mIndex - 1});
        } else {
            this.setState({ mIndex: 11})
        }
    }

    
    onPressRight = (event) => {
        if (this.state.mIndex !== 11) {
            this.setState({ mIndex: this.state.mIndex + 1});
        } else {
            this.setState({ mIndex: 0})
        }
    }

    onSubmitEvent = (event) => {
        event.preventDefault();
        const eventToAdd = {
            day: this.state.eventDay,
            month: this.state.mIndex,
            name: this.state.eventName
        }
        const toJoin = this.state.eventsToRender.concat(eventToAdd)
        this.setState({eventsToRender: toJoin})
    }

    onDayChange = (event) => {
        this.setState({eventDay: event.target.value - 1});
    }

    onNameChange = (event) => {
        this.setState({eventName: event.target.value});
    }
    
    onDeleteEvent = (indexVar) => {
        this.setState({eventsToRender: this.state.eventsToRender.filter((item, index) => index !== indexVar)})
    }
    
    render() {
        return (
            <div>
                <MonthName Month = {months2019[this.state.mIndex].name} pressRight = { this.onPressRight } pressLeft = { this.onPressLeft} />
                <Annotation />
                <Month Month = { months2019[this.state.mIndex] }/>
                <Events Month = {this.state.mIndex} eventsList = {this.state.eventsToRender} deleteFunc = {this.onDeleteEvent} />
                <AddEvent submitNewEvent = { this.onSubmitEvent } inputDayHandler = {this.onDayChange} inputNameHandler = {this.onNameChange}/>
            </div>
    
        )
    }
}

export default App;