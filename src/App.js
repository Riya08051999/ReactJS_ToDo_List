import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo';
import { v4 as uuid} from 'uuid'

class App extends React.Component {
  

  state={
    todos:[
      {
        id:uuid(),
        title:'Take out the trash',
        completed:false
      },
      {
        id:uuid(),
        title:'Dinner with wife',
        completed:true
      },
      {
        id:uuid(),
        title:'Clear out all meetings',
        completed:false
      }
      
    ]
  }

markComplete=(id)=>{
  this.setState({
    todos:this.state.todos.map(todo=>{
      if(todo.id===id)
        todo.completed=!todo.completed

       return todo; 
    })
  })

}
delTodo=(id)=>{
  this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]})
    
}

addTodo=(title)=>{
  const newTodo={
    id:uuid(),
    title,
    completed:false
  }
  this.setState({ todos:[...this.state.todos,newTodo]})
}

  render(){
      return (
        <div class='container' style={{padding:'0 1rem'}}>
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
           <Todos todos={this.state.todos} markComplete={this.markComplete}  delTodo={this.delTodo}/>
       </div>
      );
    }
}

export default App;
