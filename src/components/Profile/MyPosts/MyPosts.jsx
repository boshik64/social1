import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import classes from  './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

  
  let newPostElement = React.createRef ();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let postOnChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  let postsElements = props.postsData.map ( post => <Post message={post.message} likes={post.likesCount} /> )

    return (
      <div>
        MyPosts
        <div className={classes.posts}>
          <textarea className={classes.textarea} placeholder="Введите текст нового поста..." onChange={postOnChange} ref={newPostElement} value={props.newPostText} />
          <br />
          <button className={classes.button} onClick={addPost}>Send</button>
        </div>
        {postsElements}
      </div>
    
    )
}

export default MyPosts;