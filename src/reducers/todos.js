import {
  ADD_TODO,
  INIT_TODOS,
  LOAD_TODOS,
  SAVE_TODOS,
  TOGGLE_TODO,
} from '../actions/types';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          isNew: true,
        },
      ];
    case SAVE_TODOS:
      return [...state];
    case LOAD_TODOS:
      return [...state, ...action.todos];
    case INIT_TODOS:
      return [...state];
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo,
      );
    default:
      return state;
  }
};

export default todos;
