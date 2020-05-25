import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Jobs } from './components/Jobs';
import { Education } from './components/Education';
import { Projects } from './components/Projects';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Jobs} />
        <Route path='/jobs' component={Jobs} />
        <Route path='/education' component={Education} />
        <Route path='/projects' component={Projects} />
      </Layout>
    );
  }
}
