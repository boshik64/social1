import React from 'react';
import classes from  './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div>
        MyPosts
        <div>
          <textarea>New Post</textarea>
          <button>Send</button>
        </div>
        <Post message='Пробую пропсы' likes='24'/>
        <Post message='Пробую пропсы 2' likes='908'/>
      </div>
    
    )
}

export default MyPosts;