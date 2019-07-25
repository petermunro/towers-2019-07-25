import React, { Component } from "react";
import "./App.css";
import Column from "./Column";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Column
          onAdd={this.handleAdd}
          onDelete={this.handleDelete}
          length={this.props.height}
          onSetHeight={this.handleSetHeight}
        />
      </div>
    );
  }

  handleAdd = () => {
    console.log(`raiseIt`);
    this.props.raiseIt();
  };

  handleDelete = () => {
    console.log(`lowerIt`);
    this.props.lowerIt();
  };

  handleSetHeight = newHeight => {
    this.props.setHeight(newHeight);
  };
}

export default App;
