import React, { Component } from "react";
import "./App.css";
// import Information from './contenido';
import {
  Button,
  
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
 } from "react-bootstrap";



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
     let items = null;
    if (!this.state.nameValue == "" && !this.state.comentValue == "") {
      items = this.state.todos;
      items.push({
        name: this.state.nameValue,
        coment: this.state.comentValue
      });
      
      this.setState({ 
        todos: items,
        comentTrue: true
       });
    } else {
      alert("pon tu nombre y comentario, por favor");
    }
 


  }

  // onSubmit={(e) => {e.preventDefault(); this.buttonComent(e)}}
  render() {
       function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
}
    const items = this.state.todos.map((person, t) => {
      return <div key={t}>
          <hr />
          <div>
            <b>NOMBRE</b>
            <br /> {this.state.todos[t].name} <br />
            <b>COMENT</b>
            <br /> {this.state.todos[t].coment} <br />
          </div> <br />
          <Button bsStyle="primary" onClick={() => this.removeTodo(person)}>
            delete
          </Button>
          <Button bsStyle="primary">report as abuss</Button>
          <hr />
        </div>;
      
    });

    let Coment = () => {
      return <div>{items}</div>;
    };
    return <div>
        <form>
          NEW COMMENT<br />
          <br />
          < FieldGroup 
            placeholder = "name"
            label = "name"
            onChange = { e => (this.state.nameValue = e.target.value) }
            type = "text"
          />
          <br />
          <br />
          < FieldGroup
            placeholder = "coment"
            label = "coment"
            onChange = {e => (this.state.comentValue = e.target.value)  }
            type = "text"
            />
          <br />
          <br />
          <Button bsStyle="primary" type="button" onClick={e => {
              this.comentPost(e);
            }}>
            {" "}POST COMMENT{" "}
          </Button>
          <br />  
        </form>
        <br />
        <b>COMMENTS</b>
        <br />
        {this.state.todos.length} comments
        <div>
          {this.state.comentTrue && <div>
              <Coment />
            </div>}
        </div>
      </div>;
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
