import React from 'react';
import Todos from './Todos';

const TodoForm = ({ todosArr, setTodosArr, setSelect, filteredTodos, countTodos }) => {
  const onClick = (value) => {
    setSelect(value);
  };

  const clearCompleted = () => {
    setTodosArr(todosArr.filter(item => item.completed === false))
    console.log('123');
  }
  
  return (
    <>
      {filteredTodos.map((todo) => (
        <Todos
          key={todo.id}
          todo={todo}
          todosArr={todosArr}
          setTodosArr={setTodosArr}
        />
      ))}
      <div className="todoOptions">
        <span className="leftTodos">{countTodos} left items</span>
        <div>
          <button onClick={() => onClick('All')}>All</button>
          <button onClick={() => onClick('Active')}>Active</button>
          <button onClick={() => onClick('Completed')}>Completed</button>
        </div>
        <button onClick={clearCompleted} className="clearCompleted">Clear Completed Todos</button>
      </div>
    </>
  );
};

export default TodoForm;
