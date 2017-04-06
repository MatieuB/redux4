import React, { Component } from 'react';
//pulls state from cmpnt to app level
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index'

class NewPost extends Component {

  render() {
    const { fields: { title,categories,content}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}


export default reduxForm({
  form:'NewPostForm',
  fields: ['title','categories','content']
},null,{createPost})(NewPost);



// connect 1st arg mapSTate,2nd mapDispatch
//reduxFrom 1st is config,2nd mapSTate,3rd mapDispatch
