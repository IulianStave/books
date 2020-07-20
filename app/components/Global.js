// App.js
import React, { Component } from "react";
import { FormGroup, FormControl, InputGroup, Button, Glyphicon } from "react-bootstrap";

class Global extends Component {
  search() {
    console.log("search");
  }

  render() {
    return (
      <div>
        <h2>Book explorer</h2>

        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Search for a book" />
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
