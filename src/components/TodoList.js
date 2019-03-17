import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const maybeRenderHeading = heading => (heading ? <h3>{heading}</h3> : null);

const TodoList = ({ heading, todos, toggleTodo }) => {
  if (todos.length > 0) {
    return (
      <div className="todo-list container">
        {maybeRenderHeading(heading)}
        <ul className="fa-ul">
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
          ))}
        </ul>
      </div>
    );
  }
  return null;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      isNew: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
