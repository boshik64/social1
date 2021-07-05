import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from  './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {



    return (
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPosts postsData={props.state.postsData} 
      addPost={props.addPost} 
      newPostText={props.state.newPostText} 
      updateNewPostText={props.updateNewPostText} />
    </div>
    )
}

export default Profile;