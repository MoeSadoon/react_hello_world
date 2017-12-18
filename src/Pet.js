import React, { Component} from 'react';
import Hobby from './Hobby';
import './Pet.css';

class Pet extends Component {
    render() {
        return (
            <div className='card'>
                <h2 className='name'> Moxie </h2>
                <img src="https://github.com/tigarcia/Moxie/raw/master/moxie.png"
                    alt="My cat moxie" />
                <h5 style={{ fontSize: '2em', margin: '2px' }}> Hobbies </h5>
                <Hobby />
            </div>
        )
    }
}

export default Pet;