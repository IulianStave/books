// App.js
import React, { Component } from "react";
import { FormGroup, FormControl, InputGroup, Button, Glyphicon } from "react-bootstrap";
import Gallery from './Gallery';

class Global extends Component {

  constructor(props){
    super(props);
    this.state = {
      query: '',
      items: []
    }
  }
  search() {
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${BASE_URL}${this.state.query}`,
    {method: "GET"})
    .then(response => response.json())
    .then(json=> {
      console.log(json)
      let { items } = json;
      this.setState({items});
      console.log(this.state);
      let x = { it: [{3:"a"}, {5:"aaa"}, {6:"aaa"}]};
      let {it} = x;
      console.log(' x is ',it)
    })
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
        <Gallery items={this.state.items}/>
      </div>
    );
  }
}

export default Global;
