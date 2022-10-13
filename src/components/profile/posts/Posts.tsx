import React, {ChangeEvent} from 'react';
import classes from "./Posts.module.css";
import {Post} from "./post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileUsersPage-reducer";
import {PostsType} from "../../../redux/store";


type postsPropsType = {
    posts: Array<PostsType>
    dispatch: (action: any) => void
    newText: string
}


export const Posts = (props: postsPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let text: string = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(text))

    }

    const addPost = (newText: string) => {
        props.dispatch(addPostActionCreator(newText))
        props.dispatch(updateNewPostTextActionCreator(""))
    }


    return (
        <div className={classes.post_table}>
            My posts
            <Post posts={props.posts}/>
            <input value={props.newText} type="text" placeholder={"Введите текст"} onChange={onChangeHandler}/>
            <button onClick={() => addPost(props.newText)}>Add Post</button>
        </div>
    );
};

