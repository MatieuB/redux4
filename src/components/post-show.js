import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost, deletePost } from '../actions/index';

class PostShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }
  onDelete(){
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      })
  }
  render() {
    const { post } = this.props;
    const styles = {border:'1px solid black'};
    if(!post) {
      return <div>Loading...</div>
    }
    return (
      <div style={styles}>
        <h4>{post.title}</h4>
        <p className="pull-xs-right">categories: {post.categories}</p>
        <p>{post.content}</p>
        <Link to="/" className="btn btn-primary">Back</Link>
        <button
          onClick={this.onDelete.bind(this)}
          className="btn btn-danger pull-xs-right">Delete Post</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  }
}
export default connect(mapStateToProps, {fetchPost,deletePost})(PostShow)
