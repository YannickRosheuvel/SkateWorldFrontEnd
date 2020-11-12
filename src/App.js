import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { CourseItem } from './components/CourseItem';
import { CourseDetails } from './components/CourseDetails';
import './custom.css'
import { PageNotFound } from './components/PageNotFound';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { CommentSection } from './components/CommentSection';

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
                <Route path='/Register' component={Register} />
                <Route path='/CommentSection' component={CommentSection} />
            <Route component={PageNotFound} />
            </Switch>
      </Layout>
    );
  }
}
