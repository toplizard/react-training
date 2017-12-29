import React from 'react';
import Header from './header/index';
import Page from './page/index';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Page/>
            </div>
        );
    }
}

export default App