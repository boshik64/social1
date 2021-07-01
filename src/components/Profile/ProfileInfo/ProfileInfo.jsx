import React from 'react';
import classes from  './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div className={classes.profile}>
      <div>
        <img className={classes.wallpaper} src='https://res.cloudinary.com/practicaldev/image/fetch/s--rAHvwN_l--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kp1b5x0uufzyabikh8fp.png' />
      </div>
      <div>
        ava+discroption
      </div>
    </div>
    )
}

export default ProfileInfo;