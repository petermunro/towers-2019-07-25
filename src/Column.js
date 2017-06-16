import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

class Column extends Component {
  constructor(props) {
    super(props);
    this.state={ proposedHeight: 7 };
  }

  render() {
    const cells = Array.from(new Array(this.props.length), (x, i) => <Cell key={i + 1}>{i + 1}</Cell>);
    return (
      <div className="column">
        <div className="cell-container">
          { cells }
        </div>
        <div>
          <button onClick={this.handleDelete} className="delete">Lower</button>
          <button onClick={this.handleAdd} className="add">Higher</button>
        </div>
        <div>
          <input type="number" className="set-height" onChange={this.handleHeightChange} />
          <button onClick={this.handleSet}>Set</button>
        </div>
        <button onClick={this.handleDeleteColumn} className="delete">Delete Column</button>
      </div>
    );
  }

  handleAdd = () => {
    this.props.onHigher(this.props.colId);
  }

  handleDelete = () => {
    this.props.onLower(this.props.colId);
  }

  handleSet = () => {
    this.props.onSetHeight && this.props.onSetHeight(this.state.proposedHeight, this.props.colId);
  }

  handleHeightChange = event => {
    this.setState({proposedHeight: +event.target.value});
  }

  handleDeleteColumn = () => {
    this.props.onDeleteColumn && this.props.onDeleteColumn(this.props.colId);
  }

}

Column.propTypes = {
  length: PropTypes.number
};

export default Column;
