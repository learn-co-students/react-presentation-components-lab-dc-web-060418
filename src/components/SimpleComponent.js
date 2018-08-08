// Code SimpleComponent Here
import React from 'react'


export default class SimpleComponent extends React.Component{

    constructor(){
        super()
        this.state ={
            mood: 'happy'
        }
    }
    render(){
        return(
            <div onClick={this.handleMood}>
                {this.state.mood}
            </div>

        )
    }

    handleMood = () => { this.setState({ mood: this.state.mood === 'happy' ? 'sad' : 'happy'})}
}