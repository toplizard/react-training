import React from 'react';
import './style.sass';

const classes = [{placeHolder: 'place-holder'}, {home: 'home'}];

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <p>This is the home content</p>
                <div className='place-holder'><p>this is a placeholder</p></div>
            </div>
        );
    }
}

export default Home