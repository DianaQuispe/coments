import React, { Component } from "react";
import "./App.css";
// import Information from './contenido';

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      comentTrue: false,
      nameValue: null,
      comentValue: null
    };
  }
  removeTodo(person) {
    let items = this.state.todos;
    items = items.filter(item => item !== person);
    this.setState ({
      todos: items
    }) 
  }
  comentPost(e) {

    let items = this.state.todos;
    items.push({
      name: this.state.nameValue,
      coment: this.state.comentValue
    });

    this.setState({
      todos : items,
      comentTrue: true
    });
    console.log(
      this.state.todos[0] +
        this.state.nameValue +
        " " +
        this.state.comentValue +
        " " +
        this.state.comentTrue
    );
  }

  // onSubmit={(e) => {e.preventDefault(); this.buttonComent(e)}}
  render() {
    let count = this.state.todos.lenght;
    const items = this.state.todos.map((person, t) => {
      return (
        <div key={t}>
          <div>
             <b>NOMBRE</b> {this.state.todos[t].name} 
             <b>COMENT</b>  {this.state.todos[t].coment}
          </div>{ " "}
          <br />
          <button  onClick={() => this.removeTodo(person)} >delete</button>
          <button>report as abuss</button>
        </div>
      );
      
    });

    let Coment = () => {
      return <div>{items}</div>;
    };
    return (
      <div>
        <form>
          NEW COMMENT<br />
          <input
            placeholder="name"
            onChange={e => (this.state.nameValue = e.target.value)}
            type="text"
          />
          <br />
          <input
            placeholder="coment"
            onChange={e => (this.state.comentValue = e.target.value)}
            type="text"
          />
          <br />
          <button
            type="button"
            onClick={e => {
              this.comentPost(e);
            }}
          >
            {" "}
            POST COMMENT{" "}
          </button>
          <br />
        </form>
        <b>COMMENTS</b>
        <br />
        {this.state.todos.length} comments
        <div>
          {this.state.comentTrue && (
            <div>
              <Coment />
            </div>
          )}
        </div>
      </div>
    );
    // console.log(this.state.na)
  }
}

const App = props => {
  const { model } = props;
  return (
    <div className="App">
      <Information />
    </div>
  );
};

export default App;
