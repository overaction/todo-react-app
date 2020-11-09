import React, { useEffect, useState } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState('');
  const [todosArr, setTodosArr] = useState([]);
  const [select, setSelect] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [countTodos, setCountTodos] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  /* save local */
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

  /* useEffect */
  useEffect(() => {
    getLocalTodos();
    console.log('getlocal');
  }, []);

  useEffect(() => {
    setLocalTodos();
    checkCompleted();
    setTodos('');
  }, [todosArr]);

  useEffect(() => {
    filterHandler();
    ItemLeft();
  },[select,todosArr])

  /* Functions */
  const checkCompleted = () => {
    const found = todosArr.find(item => item.completed);
    found ? setIsCompleted(true) : setIsCompleted(false);
  }
  const ItemLeft = () => {
    let count = 0;
    todosArr.map((item) => {
      if(!item.completed) count++;
    });
    setCountTodos(count);
  }

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

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: (Math.random() * (0.12 - 0.02) + 0.02).toFixed(4),
      text: todos,
      completed: false,
    };
    setTodosArr((prev) => [...prev, data]);
  };

  const filterHandler = () => {
    switch(select) {
      case 'Active':
        setFilteredTodos(todosArr.filter(item => item.completed === false))
        break;
      case 'Completed':
        setFilteredTodos(todosArr.filter(item => item.completed === true))
        break;
      default:
        setFilteredTodos(todosArr);
    }
  }

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
      <TodoForm
      todosArr={todosArr}
      filteredTodos={filteredTodos} 
      setTodosArr={setTodosArr} 
      select={select}
      setSelect={setSelect}
      countTodos={countTodos}
      isCompleted={isCompleted}
      />
    </div>
  );
}

export default App;
