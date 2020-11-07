import React, { useState } from 'react';
import { faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Todos = ({todo, todosArr, setTodosArr}) => {
  const [complete, setComplete] = useState(todo.completed);

  const deleteTodo = () => {
    setTodosArr(todosArr.filter(item => item.id !== todo.id))
  }

  const clearTodo = () => {
    setComplete(prev => !prev);
    setTodosArr(todosArr.map((item) => {
      if(item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    }))
  }

  return (
    <section className="todo-list">
      <div className="list--clear">
        <label htmlFor="list--item">
          <button className={"clearBtn "} onClick={clearTodo}>
            <FontAwesomeIcon icon={faCircle} size="2x" />
          </button>
        </label>
        <input className={(complete ? 'completed' : null)} type="text" id="list--item" disabled={true} value={todo.text} />
      </div>
      <button className="deleteBtn" onClick={deleteTodo}>
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </button>
    </section>
  );
};

export default Todos;
