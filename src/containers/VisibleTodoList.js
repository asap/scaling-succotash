import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter, heading, content) => {
  switch (content) {
    case 'NEW':
      return todos.filter(t => t.isNew);
    case 'ACTIVE':
      return todos.filter(t => !t.completed && !t.isNew);
    case 'COMPLETED':
      if (filter !== 'SHOW_COMPLETED') {
        return [];
      }
      return todos.filter(t => t.completed && !t.isNew);
    case 'ALL':
      return todos;
    default:
      throw new Error('Unknown content: ' + content);
  }
};

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(
    state.todos,
    state.visibilityFilter,
    ownProps.heading,
    ownProps.content,
  ),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
