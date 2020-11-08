import React, { useEffect, useState } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState('');
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
      id: (Math.random() * (0.12 - 0.02) + 0.02).toFixed(4),
      text: todos,
      completed: false,
    };
    setTodosArr((prev) => [...prev, data]);
  };

  useEffect(() => {
    getLocalTodos();
    console.log('getlocal');
  }, []);

  useEffect(() => {
    setLocalTodos();
    setTodos('');
    console.log('useeffectd');
  }, [todosArr]);

  const onTodoChange = (e) => {
    setTodos(e.target.value);
  };

  const clearAll = () => {
    const inCompletedTodos = todosArr.filter(
      (item) => item.completed === false
    );
    console.log(inCompletedTodos);

    inCompletedTodos.length > 0
      ? setTodosArr(
          todosArr.map((item) => {
            if (item.completed === false) {
              return {
                ...item,
                completed: true,
              };
            }
            return item;
          })
        )
      : setTodosArr(
          todosArr.map((item) => {
            return {
              ...item,
              completed: false,
            };
          })
        );
  };

  return (
    <div className="todos_container">
      <h1>todos</h1>
      <div className="todoForm">
        <span className="clearAllBtn" onClick={clearAll}>
          <FontAwesomeIcon icon={faAngleDown} size="2x" />
        </span>
        <form onSubmit={onSubmit} className="todos_container">
          <input
            className="todo--input"
            placeholder="What needs to be done?"
            required
            value={todos}
            onChange={onTodoChange}
          />
        </form>
      </div>
      {todosArr.map((todo) => (
        <Todos
          key={todo.id}
          todo={todo}
          todosArr={todosArr}
          setTodosArr={setTodosArr}
        />
      ))}
    </div>
  );
}

export default App;
