import React, { Component } from 'react';

class MoviesForm extends Component {
  render() {
    const { match, history } = this.props;
    return (
      <div>
        <h1>Movies {match.params.id}</h1>
        <button
          className="btn btn-primary"
          onClick={() => history.push('/movies')}
        >
          Save
        </button>
      </div>
    );
  }
}

export default MoviesForm;
