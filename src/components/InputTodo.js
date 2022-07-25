import React, { Component } from 'react';
import { Col, InputGroup, Row, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

class InputTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        }
    }
    addHandler = () =>{
        this.props.addTodo(this.state.todo);
        this.setState({todo:""})
    }    
    enterInput = (e) => {
        if (e.keyCode === 13){
            this.addHandler();
        }
    }
    changeTodo = (e) =>{
        this.setState({todo:e.target.value});
    }
    render() {
        return (
            <Row>
                <Col lg={12} className="align-items-center text-center pb-3">
                <InputGroup>
                    <Form.Control id='msg' type='text'
                        className='form-control' name='msg'
                        placeholder='Enter your to-do item here'
                        value={this.state.todo}
                        onChange={this.changeTodo}
                        onKeyUp={this.enterInput} />
                    <Button variant="primary" onClick={this.addHandler}>Add</Button>
                </InputGroup>
                </Col>
            </Row> 
        );
    }
}

InputTodo.propTypes ={
    addTodo: PropTypes.func.isRequired
};
export default InputTodo;