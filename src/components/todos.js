import React, { useState } from 'react';
import { faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Todos = ({todo, todosArr, setTodosArr}) => {
  const deleteTodo = () => {
    setTodosArr(todosArr.filter(item => item.id !== todo.id))
  }

  const clearTodo = () => {
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
      <div className="todo-clear">
          <button className={(todo.completed ? 'clearBtn' : 'nonClear')} onClick={clearTodo}>
            <FontAwesomeIcon icon={faCircle} size="2x" />
          </button>
        <input className={'todo-input '+(todo.completed ? 'completed' : 'inCompleted')} type="text" disabled={true} value={todo.text} />
      </div>
      <button className={"deleteBtn"} onClick={deleteTodo}>
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </button>
    </section>
  );
};

export default Todos;
