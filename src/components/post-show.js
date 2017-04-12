import React, { Component } from 'react';

export default class PostShow extends Component {
  render() {
    return (
      <div>
        Showing Post: {this.props.params.id}
      </div>
    )
  }
}
