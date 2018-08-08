// Code SimpleComponent Here
import React from 'react';

class SimpleComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            mood: "happy"
        }
    }
    setMyMood = () => {
        let newMood = (this.state.mood === "happy") ? "sad" : "happy"
        this.setState({
            mood: newMood
        })
    } 
    render() {
        return <div onClick={this.setMyMood}>{this.state.mood}</div>
    }
}

export default SimpleComponent;
