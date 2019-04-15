import React, { Component } from 'react';
import {BrowserRouter as Router,  Route} from 'react-router-dom'
import '../styles/base.css'
import AlbumList from './AlbumList'
import ImageList from './ImageList'
import Image from './Image'


const App = (props) => (
  <Router>
    <div id="container">
      <Route exact path="/" component={AlbumList} />
      <Route path="/Albums/:id" component={ImageList} />
      <Route path="/Images/:id" component={Image} />
    </div>
  </Router>
)

export default App
