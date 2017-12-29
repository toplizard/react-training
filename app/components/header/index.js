import React from 'react';
import Navigation from '../navigation/index';

var classNames = require('classnames');

import './style.sass'

const scrollTop = 100;

class Header extends React.Component {
    componentDidMount() {

        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    constructor(props) {

        super(props);

        this.state = {activeClass: false};
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(event) {
        const scrollY = window.scrollY;
        if (scrollY > scrollTop) {
            this.setState({
                activeClass: true
            });
        } else {
            this.setState({
                activeClass: false
            });
        }
    }

    render() {
        let headerClasses = classNames({'header': true}, {'scrolled': this.state.activeClass});
        return (
            <header className={headerClasses}><h1>This is the header</h1>
                <Navigation/>
            </header>
        );
    }
}

export default Header