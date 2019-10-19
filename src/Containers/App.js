import React from 'react';
import Annotation from '../Components/Annotation';
import MonthName from '../Components/MonthName';
import Month from '../Components/Month';
import { months2019 } from '../months2019';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            mIndex: 0,
            month: ''
        }

        this.onPressRight = this.onPressRight.bind(this);
        this.onPressLeft = this.onPressLeft.bind(this);
    }
    
    onPressLeft(event) {
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

    render() {
        return (
            <div>
                <MonthName Month = {months2019[this.state.mIndex].name} pressRight = { this.onPressRight } pressLeft = { this.onPressLeft} />
                <Annotation />
                <Month Month = { months2019[this.state.mIndex] } />
            </div>
    
        )
    }
}

export default App;