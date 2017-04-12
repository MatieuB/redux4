import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//pulls state from cmpnt to app level
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index'

class NewPost extends Component {
  //get accest to route prop on context (this.context.router)
  static contextTypes = {
    router: PropTypes.object
  }
  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        //post created, nav to '/'
        this.context.router.push('/');
      });
  }
  dangerClass(field){
    return (field.touched && field.invalid) ? 'has-danger' : '';
  }
  render() {
    const { fields: { title, categories, content}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new Post</h3>
        <div className={`form-group ${this.dangerClass(title)} `}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className={`form-group ${this.dangerClass(categories)}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className={`form-group ${this.dangerClass(content)}`}>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}
function validate(values) {
  const errors = {};

  //with redux form,if key matches fieldname,
  !values.title ? errors.title = 'Enter a username': null;
  !values.categories ? errors.categories = 'Enter at least one category': null;
  !values.content ? errors.content = 'Please provide some content': null;


  return errors;
}


export default reduxForm({
  form:'NewPostForm',
  fields: ['title','categories','content'],
  validate
},null,{createPost})(NewPost);


// lookup handlesubmit form reduxForm
// connect 1st arg mapSTate,2nd mapDispatch
//reduxFrom 1st is config,2nd mapSTate,3rd mapDispatch
