import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import CardHeader from 'react-bootstrap/esm/CardHeader';

class App extends Component {
    //copied
    render() {
        return (
            <Container>
                <Card>
                    <CardHeader>
                        <div className="title d-flex">:: Todolist App</div>
                    </CardHeader>
                    <Card.Body className="card-borderless">
                        <InputTodo addTodo={this.props.addTodo} />
                        <TodoList todolist={this.props.todolist}
                            toggleDone={this.props.toggleDone} deleteTodo={this.props.deleteTodo} />
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

// 항상 유효성 검증 먼저 작성하자
App.propTypes = {
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleDone: PropTypes.func.isRequired,
    todolist: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;