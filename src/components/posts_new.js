import React,{Component,PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import { createPosts } from '../actions/index';
import {Link} from 'react-router';




class PostsNew extends Component{
  static contextTypes = {
    router: PropTypes.object// hacemos referencia al objeto router de nuestro parent OMG esto no lo sabia
  }
  onSubmit(props){
    this.props.createPosts(props)
    .then(()=>{
      //in this section us suposed that the blog post has been added
      this.context.router.push('/');
    });
  }
  render(){
    const { fields: {title,categories,content}, handleSubmit} = this.props;
    console.log(title);
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <h3>Create a New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger':''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}  />
          <div className="text-help">
            {title.touched ? title.error: ''}
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger':''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}   />
            <div className="text-help">
              {categories.touched ? categories.error: ''}
            </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger':''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
            <div className="text-help">
              {content.touched ? content.error: ''}
            </div>
        </div>


        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }

}



function validate(values){
  const errors = {};
   var re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  // var str = "111aa111";
  // var myArray = re.exec(str);
  // console.log(myArray);

  if(!values.title){
    errors.title = "Enter a username";
  }
  if(!values.categories){
    errors.categories = "Enter Categories";
  }
  if(!values.content){
    errors.content = "Enter Content";
  }
  return errors;
}


export default reduxForm({
  form:'PostsNewForm',
  fields : ['title','categories','content'],
  validate
}, null,{ createPosts })(PostsNew);
//61670
