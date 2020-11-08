import React from 'react';
import Todos from './Todos';

const TodoForm = ({ todosArr, setTodosArr, setSelect, filteredTodos, countTodos }) => {
  const onClick = (value) => {
    setSelect(value);
  };
  
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
        <button className="clearCompleted">Clear Completed Todos</button>
      </div>
    </>
  );
};

export default TodoForm;
