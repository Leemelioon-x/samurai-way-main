import React from 'react';
import classes from "./Post.module.css";
import {PostsType} from "../../../../redux/profileUsersPage-reducer";


type postPropsType= {
    posts: Array<PostsType>
}

export const Post = (props:postPropsType) => {
    return (
        <div>
            {props.posts.map((el,index)=>
            <div className={classes.post}>{props.posts[index].post}</div>)}
        </div>
    );
};

