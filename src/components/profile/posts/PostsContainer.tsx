import React, {ChangeEvent} from 'react';
import classes from "./Posts.module.css";
import {Post} from "./post/Post";
import {addPostActionCreator, PostsType, updateNewPostTextActionCreator} from "../../../redux/profileUsersPage-reducer";
import {Posts} from "./Posts";



type postsPropsType = {
    posts: Array<PostsType>
    dispatch: (action: any) => void
    newText: string
}


export const PostsContainer = (props: postsPropsType) => {

    const onChangeHandler = (text:string) => {
        props.dispatch(updateNewPostTextActionCreator(text))

    }

    const addPost = (newText: string) => {
        props.dispatch(addPostActionCreator(newText))
        props.dispatch(updateNewPostTextActionCreator(""))
    }


    return (
        <Posts posts={props.posts}
               newText={props.newText}
               addPost={addPost}
               updateNewPostText={onChangeHandler}
        />
    );
};

