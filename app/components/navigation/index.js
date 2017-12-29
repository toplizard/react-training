import React from 'react';
import {Link} from 'react-router-dom'

class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <ul>Navigation
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/my-page'>My Page</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation