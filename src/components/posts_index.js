import React, { Component } from 'react';
import { Link } from 'react-router'
import { fetchPosts } from '../actions/index';
import { connect } from 'react-redux';



class PostsIndex extends Component {
  componentWillMount() {
    console.log("good time to call an action creator to fetch posts");
    this.props.fetchPosts();
  }
  renderPosts(){
    const posts = this.props.posts.all;

    return (
      posts.map(post=> {
        return (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <li  className="list-group-item">
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </li>
        </Link>
        )
      })
    )
  }
  render() {
    return (
     <div>
      <div className="text-xs-right">
        <Link to="/posts/new" className="btn btn-primary">
        New Post
        </Link>
      </div>
      <h3>Add Post</h3>
      <ul className="list-group">
        {this.renderPosts()}
      </ul>
     </div>
    )

  }
}

function mapStateToProps(state) {
  return {posts:state.posts};
}

// passed obj as 2nd arg and avoid mapDispatchToProps w/bindActionCreators fn
export default connect(mapStateToProps,{fetchPosts})(PostsIndex)
