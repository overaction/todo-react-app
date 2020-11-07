import React from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Todos from './components/todos';

function App() {
  return (
    <div className="todos_container">
      <h1>todos</h1>
      <div className="todo">
        <span className="todo--angleDown"><FontAwesomeIcon icon={faAngleDown} size="2x"/></span>
        <input className="todo--input" placeholder="What needs to be done?" />
      </div>
      <Todos />
    </div>
  );
}

export default App;
