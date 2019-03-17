import React from 'react'
import PropTypes from 'prop-types'

const renderIcon = (completed) => {
  const iconCSS = completed ? 'fa-check-square' : 'fa-square';
  return <span class="fa-li"><i class={"far " + iconCSS}></i></span>
}

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    className={completed ? 'completed' : ''}
  >
    {renderIcon(completed)}{text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
