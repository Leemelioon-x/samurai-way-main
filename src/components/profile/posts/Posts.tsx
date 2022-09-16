import React, {ChangeEvent, useState} from 'react';
import classes from "./Posts.module.css";
import {Post} from "./post/Post";

type postsPropsType={
    posts:Array<postsType>
    addPost:(newPostMessage:string)=>void
}

type postsType={
    id:number
    post:string
}



export const Posts = (props:postsPropsType) => {

  const  [value,setValue]=useState("")

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value)
    }

    const addPost=(value:string)=>{
        props.addPost(value)
        setValue("")

    }



    return (
        <div>
            My posts
           <Post posts={props.posts}/>
            <input value={value} type="text" onChange={onChangeHandler}/>
            <button  onClick={()=>addPost(value)}>Add Post</button>
        </div>
    );
};

