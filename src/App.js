import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { CourseItem } from './components/CourseItem';
import { CourseDetails } from './components/CourseDetails';
import './custom.css'
import { PageNotFound } from './components/PageNotFound';
import { Login } from './components/Login';

export default class App extends Component {
    static displayName = App.name;
    state = {
        name: 'Yannick'
    }

  render () {
    return (
        <Layout>
            <Switch>
                <Home name={this.state.name} exact path='/'/>
                <Route  path='/courses' component={CourseItem} />
                <Route path='/coursedetails/:id' component={CourseDetails} />
                <Route path='/login' component={Login} />
            <Route component={PageNotFound} />
            </Switch>
      </Layout>
    );
  }
}
