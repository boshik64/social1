import React from 'react';
import classes from  './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  
  let newPostElement = React.createRef ();

  let addPost = () => {
    props.addPost();
  }

  let postOnChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  let postsElements = props.postsData.map ( post => <Post message={post.message} likes={post.likesCount} /> )

    return (
      <div>
        MyPosts
        <div>
          <textarea onChange={postOnChange} ref={newPostElement} value={props.newPostText} />
          <button onClick={addPost}>Send</button>
        </div>
        {postsElements}
      </div>
    
    )
}

export default MyPosts;