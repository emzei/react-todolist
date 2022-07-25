import React, { Component } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
class TodoItem extends Component {

    render() {
        let itemClassName = 'd-flex justify-content-between align-items-start list-group-item ';
        if(this.props.todoitem.done){
            itemClassName += ' success';
        }
        return (
            <ListGroup.Item as="li" className={itemClassName}>
                <span className={this.props.todoitem.done?"text-muted ":""}
                    onClick={ ()=> this.props.toggleDone(this.props.todoitem.no)} >
                    {this.props.todoitem.todo} {this.props.todoitem.done ? "(Done)":""}    
                </span>
                <Button variant="danger" className='float-end pointer ' onClick={ ()=> this.props.deleteTodo(this.props.todoitem.no)} >Delete</Button>
            </ListGroup.Item>
        );
    }
}
TodoItem.propTypes = {
    todoitem: PropTypes.object.isRequired,
    toggleDone: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}
export default TodoItem;