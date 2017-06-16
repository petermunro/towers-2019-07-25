import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Column from './Column';
import { addColumn, deleteColumn, setHeight, higher, lower } from './redux/actions';


class App extends Component {

  render() {
    let columnComponents = this.props.columns.map(column =>
      <Column
        onHigher={this.handleHigher}
        onLower={this.handleLower}
        length={column.height}
        onSetHeight={this.handleSetHeight}
        colId={column.colId}
        key={column.colId}
        onDeleteColumn={this.handleDeleteColumn}
      />
    );
    return (
      <div className="App">
        <div>
          <button onClick={this.handleAddColumn} className="add">Add Column</button>
        </div>
        { columnComponents }
      </div>
    );
  }

  handleHigher = colId => {
    this.props.higherAgainProp(colId);
  }

  handleLower = colId => {
    this.props.lowerProp(colId);
  }

  handleSetHeight = (newHeight, colId) => {
    this.props.setHeightProp(newHeight, colId);
  }

  handleDeleteColumn = colId => {
    this.props.deleteColumnProp(colId);
  }

  handleAddColumn = () => {
    this.props.addColumnProp();
  }

}

const mapStateToProps = state => {
  return {
    columns: state.columns,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addColumnProp: function() {
      dispatch(addColumn());
    },
    deleteColumnProp: function(colId) {
      dispatch(deleteColumn(colId));
    },
    setHeightProp: function(newHeight, colId) {
      dispatch(setHeight(newHeight, colId));
    },
    higherProp: function(colId) {
      dispatch(higher(colId));
    },
    higherAgainProp: function(colId) {
      dispatch( (dispatch, getState) => {
        dispatch(higher(colId));
        dispatch(higher(colId));
      });
    },
    lowerProp: function(colId) {
      dispatch(lower(colId));
    },

  };
}

const ReduxApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default ReduxApp;
