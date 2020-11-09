import React, { useCallback, useState } from 'react';
import Todos from './Todos';

const TodoForm = ({ todosArr, setTodosArr, select, setSelect, filteredTodos, countTodos, isCompleted }) => {
  
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
        <div className="todosStatus">
          <button className={select==='All' ? "selected" : ''} onClick={() => onClick('All')}>All</button>
          <button className={select==='Active' ? "selected" : ''} onClick={() => onClick('Active')}>Active</button>
          <button className={select==='Completed' ? "selected" : ''} onClick={() => onClick('Completed')}>Completed</button>
        </div>
        <button onClick={clearCompleted} className={"clearCompleted "+(isCompleted ? "visible" : '')}>Clear Completed Todos</button>
      </div>
    </>
  );
};

export default TodoForm;
