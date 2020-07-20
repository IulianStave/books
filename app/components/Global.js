// App.js
import React, { Component } from "react";
import { FormGroup, FormControl, InputGroup, Button, Glyphicon } from "react-bootstrap";

class Global extends Component {

  constructor(props){
    super(props);
    this.state = {
      query: ''
    }
  }
  search() {
    console.log("search");
    console.log(this.state.query);
  }

  render() {
    return (
      <div className="Global">
        <h2>Book explorer</h2>

        <FormGroup>
          <InputGroup>
            <FormControl 
              type="text"
              placeholder="Search for a book"
              onChange={event => this.setState({query: event.target.value})}
              onKeyPress = { event => {
                if (event.key == 'Enter'){
                  this.search();
                }
              }}
              />
            <InputGroup.Append onClick= {()=> this.search()}>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

export default Global;
