import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./Todo.css";

const todo = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      finished: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  toggleItem = itemId => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            finished: !item.finished
          };
        }
        return item;
      })
    });
  };

  clearFinished = e => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(item => !item.finished)
    });
  }





  render() {
    return (
      <div className="App">
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
      </div>
      
      <TodoList
        todo={this.state.todo}
        toggleItem={this.toggleItem}
        clearFinished={this.clearFinished}
      />
      </div>
    );
  }
}

export default App;
