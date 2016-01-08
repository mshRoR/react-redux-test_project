/**
 * Created by root on 1/7/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

import routes from './routes';

var TestApp = React.createClass({
  render: function(){
    return <Router>{routes}</Router>;
  }
});

ReactDOM.render(
  <TestApp/>,
  document.getElementById('app')
);

/*var TestApp = React.createClass({
  render: function(){
    return <div>
      <h1>Hello, world! I am a novie Node learner.</h1>
    </div>;
  }
});
ReactDOM.render(
  <TestApp/>,
  document.getElementById('example')
);*/

/*var HW = React.createClass({
  render: ()=>{
    return <h1>Hello, React and Redux World!</h1>
  }
});

ReactDOM.render(
  <HW/>,
  document.getElementById("example")
);*/

/*ReactDOM.render(
  //<h1>Hello, World!</h1>,
  React.createElement('h1', null, 'Hello, React!'),
  document.getElementById('example')
);*/
