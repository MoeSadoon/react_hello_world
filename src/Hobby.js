import React, { Component } from 'react';

class Hobby extends Component {
    render() {
        const hobbies = ["Eating", "Sleeping", "Cuddling"];
        const listStyle = {fontSize: '1.5em', margin: '2px'};
        return (
            <ul>
                {hobbies.map( (hobby, index) => {
                    return <li style={listStyle}>{hobby}</li>
                })}
            </ul>
        )
    }
};

export default Hobby;

