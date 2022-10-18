import React, {ChangeEvent} from 'react';
import classes from "./Posts.module.css";
import {Post} from "./post/Post";
import {addPostActionCreator, PostsType, updateNewPostTextActionCreator} from "../../../redux/profileUsersPage-reducer";



type postsPropsType = {
    posts: Array<PostsType>
    newText: string
    updateNewPostText:(text:string)=>void
    addPost:(text:string)=>void
}


export const Posts = (props: postsPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
       props.updateNewPostText(e.currentTarget.value)

    }

    const addPost = (newText: string) => {
        props.addPost(newText)
        props.updateNewPostText('')
    }


    return (
        <div className={classes.post_table}>
            My posts
            <Post posts={props.posts}/>
            <input value={props.newText}
                   type="text"
                   placeholder={"Введите текст"}
                   onChange={onChangeHandler}/>
            <button onClick={() => addPost(props.newText)}>Add Post</button>
        </div>
    );
};

