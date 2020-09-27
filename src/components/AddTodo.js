import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        title:''
    }
    
    onChange=(e)=>{
        this.setState({title:e.target.value})
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({ title:''})

    }

    render() {
        return (
            <form onSubmit={this.onSubmit}> 
                <input onChange={this.onChange} value={this.state.title} style={{padding:'5px'}} type='text' name='title' placeholder='Add todo....'></input>
                <input type="submit" value="Submit" class="btn" ></input>
            </form>
        )
    }
}

export default AddTodo
