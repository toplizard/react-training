import React from 'react';
import Home from '../pages/home/index';
import MyPage from '../pages/my-page/index';

import {Switch, Route} from 'react-router-dom'

class Page extends React.Component {
    render() {
        return (
            <div id="page-content">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/my-page' component={MyPage}/>
                </Switch>

            </div>
        );
    }
}

export default Page