import React from "react";
import classes from  './Music.module.css';

const Music = (props) => {
    return (
        <div className={classes.music}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GX8Hg6kWQYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7JGDWKJfgxQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Music;