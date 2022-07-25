import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        }
    }
    addHandler = () =>{
        console.log(this.state.todo);
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
            <div className='row'>
                <div className='col'>
                <div className='input-group'>
                <input id='msg' type='text'
                    className='form-control' name='msg'
                    placeholder='enter your to-do item here'
                    value={this.state.todo}
                    onChange={this.changeTodo}
                    onKeyUp={this.enterInput} />
                <span className='btn btn-primary input-group-addon' onClick={this.addHandler}>Add</span>
                </div>
                </div>
            </div>
        );
    }
}

InputTodo.propTypes ={
    addTodo: PropTypes.func.isRequired
};
export default InputTodo;