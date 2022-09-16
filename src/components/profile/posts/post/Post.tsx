import React from 'react';
import classes from "./Post.module.css";

type postPropsType={
    posts:Array<postsType>
}

type postsType={
    id:number
    post:string
}

export const Post = (props:postPropsType) => {
    return (
        <div>
            {props.posts.map((el,index)=>
            <div className={classes.post}>{props.posts[index].post}</div>)}
        </div>
    );
};

