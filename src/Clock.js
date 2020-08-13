import React from 'react';

class Clock extends React.Component {
    // `constructor` is part of `class` and React components
    // always call when an instance of our class is created
    // aka `construct`d
    // initialize our stated in our constructor
    constructor(props) {
        super(props)
        // bad code: this.state.displayTime = ''
        // we must set state to an object
        this.state = {
            displayTime: '',
            visitorName: 'Banjo-Kazoowie'
        }
    }

    // `componentDidMount` is standard in React - this is where we 
    // load date or otherwise initialize data
    componentDidMount() {
        this.timerId = setInterval(() => {
            // call the `tick`
            this.tick()
        }, 1000);
    }

    // custom method as seen on reactjs.org
    tick() {
        console.log("In tick")
        this.setState({
            displayTime: new Date().toLocaleTimeString()
        })
    }

    // `render` is the standard for getting html into our web page
    render() {
        // const displayTime = this.state.displayTime
        // const visitorName = this.state.visitorName
        const { displayTime, visitorName } = this.state

        return (
            <div className="clock">
                <h2>Time is {displayTime}</h2>
                <dive>Thanks for visiting {visitorName}</dive>
            </div>
        )
    }
}

export default Clock;