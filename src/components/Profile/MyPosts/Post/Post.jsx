import React from 'react';
import classes from  './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
          <img src='https://img.pngio.com/avatar-icon-flat-avatar-png-256_256.png' />
          {props.message}
          <div>
            <span><b>{props.likes} <img src="https://img.icons8.com/pastel-glyph/2x/facebook-like--v2.png" alt="" /></b></span>
          </div>
        </div>

    )
}

export default Post;