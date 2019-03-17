import { loadTodos, saveTodos } from '../actions';

const todoStoreMiddleware = ({dispatch, getState}) => next => action => {
  next(action);

  if (action.type === 'ADD_TODO') {
    dispatch(saveTodos());
  }

  if (action.type === 'TOGGLE_TODO') {
    dispatch(saveTodos());
  }

  if (action.type === 'SAVE_TODOS') {
    // Save all todos as not new
    const todos = getState().todos.map(el => ({
      ...el,
      isNew: false
    }));

    // put into local storage
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  if (action.type === 'INIT_TODOS') {
    // Read from localstorage or return empty array
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    dispatch(loadTodos(todos));
  }
}

export default todoStoreMiddleware;
