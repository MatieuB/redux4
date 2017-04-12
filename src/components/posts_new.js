import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//pulls state from cmpnt to app level
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
//using _ to refactor form
import _ from 'lodash';

const FIELDS = {
  title: {
    type: 'input',
    label: 'Title'
  },
  categories: {
    type: 'input',
    label: 'Categories'
  },
  content:{
    type: 'textarea',
    label: 'Content'
  }
}

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
  renderField(fieldConfig,field){
    const fieldHelper = this.props.fields[field];

    return (
      <div key={field} className={`form-group ${this.dangerClass(fieldHelper)} `}>
        <label>{fieldConfig.label}</label>
        <fieldConfig.type type="text" className="form-control" {...fieldHelper}/>
        <div className="text-help">
          {fieldHelper.touched ? fieldHelper.error : ''}
        </div>
      </div>
    )
  }
  render() {
    const { fields: { title, categories, content}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new Post</h3>
        {_.map(FIELDS, this.renderField.bind(this))}
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}
function validate(values) {
  const errors = {};

  //with redux form,if key matches fieldname,
  _.each(FIELDS, (type,field) =>{
    if(!values[field]) {
      errors[field] = `${field} cannot be blank`;
    }
  })
  //example below b4 refactor
  // !values.title ? errors.title = 'Enter a username': null;


return errors;
}


export default reduxForm({
  form:'NewPostForm',
  fields : _.keys(FIELDS),
  validate
},null,{createPost})(NewPost);


// lookup handlesubmit form reduxForm
// connect 1st arg mapSTate,2nd mapDispatch
//reduxFrom 1st is config,2nd mapSTate,3rd mapDispatch


// original form
// <div className={`form-group ${this.dangerClass(title)} `}>
//   <label>Title</label>
//   <input type="text" className="form-control" {...title}/>
//   <div className="text-help">
//     {title.touched ? title.error : ''}
//   </div>
// </div>
// <div className={`form-group ${this.dangerClass(categories)}`}>
//   <label>Categories</label>
//   <input type="text" className="form-control" {...categories}/>
//   <div className="text-help">
//     {categories.touched ? categories.error : ''}
//   </div>
// </div>
// <div className={`form-group ${this.dangerClass(content)}`}>
//   <label>Content</label>
//   <textarea className="form-control" {...content}/>
//   <div className="text-help">
//     {content.touched ? content.error : ''}
//   </div>
// </div>
