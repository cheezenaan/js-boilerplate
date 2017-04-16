import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/hello';
import World from './components/world';

ReactDOM.render(
  <div>
    <Hello />
    <World />
  </div>,
  document.getElementById('app'),
);
