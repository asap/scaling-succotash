import React from 'react';
import { connect } from 'react-redux';
import { initTodos } from '../actions';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

class App extends React.Component {
  componentDidMount() {
    this.props.initTodos();
  }
  render() {
    return (
      <div className="wrapper">
        <AddTodo />
        <VisibleTodoList heading={'New Tasks'} content={'NEW'} />
        <VisibleTodoList heading={'All Tasks'} content={'ACTIVE'} />
        <Footer />
        <VisibleTodoList content={'COMPLETED'} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  initTodos,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
