import React, { Component } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
class TodoList extends Component {
    render() {
        let todoItems = this.props.todolist.map((item) => {
            return (
                <TodoItem key={item.no} todoitem={item} deleteTodo={this.props.deleteTodo}
                    toggleDone={this.props.toggleDone} />
            )
        })
        return (
            <Row>
                <Col>
                    <ListGroup as="ul" variant="flush">
                        {todoItems}
                    </ListGroup>
                </Col>
            </Row>
        );
    }
}
TodoList.propTypes = {
    todolist: PropTypes.arrayOf(PropTypes.object),
    toggleDone: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}
export default TodoList;