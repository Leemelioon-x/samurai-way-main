import React, {ChangeEvent, useState} from 'react';
import classes from "./Posts.module.css";
import {Post} from "./post/Post";

type postsPropsType={
    posts:Array<postsType>
    addPost:(newPostMessage:string)=>void
    updateNewPostText:(newText:string)=>void
    newText:string
}

type postsType={
    id:number
    post:string

}



export const Posts = (props:postsPropsType) => {

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        let text=e.currentTarget.value
        props.updateNewPostText(text)
    }

    const addPost=(newText:string)=>{
        props.addPost(newText)
        props.updateNewPostText('')
    }



    return (
        <div>
            My posts
           <Post posts={props.posts}/>
            <input value={props.newText} type="text" onChange={onChangeHandler}/>
            <button  onClick={()=>addPost(props.newText)}>Add Post</button>
        </div>
    );
};

