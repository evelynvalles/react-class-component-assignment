import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.age
        }
    }

    ageCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return(
            <div>
                <div>
                    <h1>{this.props.lastName}, {this.props.firstName}</h1>
                    <p>Age: {this.state.count}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                    <button onClick={this.ageCount}>Birthday Button for {this.props.firstName}</button>
                </div>
            </div>
        );
    }
}

export default PersonCard