import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class App extends Component {
    //copied
    render() {
        return (
            <div className="container">
                <div className="card card-body bg-light">
                    <div className="title">:: Todolist App</div>
                </div>
                <div className="card card-default card-borderless">
                    <div className="card-body">
                        <InputTodo addTodo={this.props.addTodo} />
                        <TodoList todolist={this.props.todolist} 
                            toggleDone={this.props.toggleDone} deleteTodo={this.props.deleteTodo}/>
                    </div>
                </div>
            </div>
        );
    }
}

// 항상 유효성 검증 먼저 작성하자
App.propTypes = {
    addTodo : PropTypes.func.isRequired,
    deleteTodo : PropTypes.func.isRequired,
    toggleDone : PropTypes.func.isRequired,
    todolist : PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;