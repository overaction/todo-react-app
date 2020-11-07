import React from 'react';
import { faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Todos = () => {
  return (
    <div className="todo-list">
      <div className="list--clear">
        <label for="list--item">
          <button className="clearBtn"><FontAwesomeIcon icon={faCircle} size="2x"/></button>
        </label>
        <input type="text" id="list--item" disabled="true" value="a"/>
      </div>
      <button className="deleteBtn"><FontAwesomeIcon icon={faTimes} size="2x"/></button>
    </div>
  )
}

export default Todos;