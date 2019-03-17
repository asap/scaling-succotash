import uuidv1 from 'uuid/v1';

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: uuidv1(),
  text,
  isNew: true,
});

export const initTodos = () => ({
  type: 'INIT_TODOS',
});

export const loadTodos = todos => ({
  type: 'LOAD_TODOS',
  todos,
});

export const saveTodos = () => ({
  type: 'SAVE_TODOS',
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
