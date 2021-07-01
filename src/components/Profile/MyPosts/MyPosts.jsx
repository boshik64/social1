import React from 'react';
import classes from  './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    {id: 1, message: 'Пробую пропсы', likesCount: 23},
    {id: 2, message: 'Пробую выносить данные в массив', likesCount: 1322}   
  ]

    return (
      <div>
        MyPosts
        <div>
          <textarea>New Post</textarea>
          <button>Send</button>
        </div>
        <Post message={postsData[0].message} likes={postsData[0].likesCount} />
        <Post message={postsData[1].message} likes={postsData[1].likesCount} />
      </div>
    
    )
}

export default MyPosts;