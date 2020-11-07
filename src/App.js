import React, { useEffect, useState } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Todos from './components/todos';

function App() {
  const [todo, setTodo] = useState('');
  const [todosArr, setTodosArr] = useState([]);

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodosArr(todoLocal);
    }
  };

  const setLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todosArr));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: (Math.random() * (0.120 - 0.0200) + 0.0200).toFixed(4),
      text: todo,
      completed: false,
    }
    setTodosArr((prev) => [...prev, data]);
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    setLocalTodos();
    setTodo('');
  }, [todosArr]);

  const onTodoChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="todos_container">
      <h1>todos</h1>
      <div className="todo">
        <span className="todo--angleDown">
          <FontAwesomeIcon icon={faAngleDown} size="2x" />
        </span>
        <form onSubmit={onSubmit} className="todos_container">
          <input
            className="todo--input"
            placeholder="What needs to be done?"
            required
            value={todo}
            onChange={onTodoChange}
          />
        </form>
      </div>
      {todosArr.map(todo => (
        <Todos key={todo.id} todo={todo} todosArr={todosArr} setTodosArr={setTodosArr}/>
      ))}
    </div>
  );
}

export default App;
