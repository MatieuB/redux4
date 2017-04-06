import React, { Component } from 'react';
import { fetchPosts } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class PostsIndex extends Component {
  componentWillMount() {
    console.log("good time to call an action creator to fetch posts");
    this.props.fetchPosts();
  }
  render() {
    return (
     <div>
      <div className="text-xs-right">
        <Link to="/posts/new" className="btn btn-primary">
        New Post
        </Link>
      </div>
      <div>Add Post</div>
     </div>
    )

  }
}



// passed obj as 2nd arg and avoid mapDispatchToProps w/bindActionCreators fn
export default connect(null,{fetchPosts})(PostsIndex)
