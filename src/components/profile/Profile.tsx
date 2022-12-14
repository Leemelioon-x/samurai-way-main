import React from 'react';
import classes from "./Profile.module.css";
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostsType, ProfileUsersType} from "../../redux/profileUsersPage-reducer";
import {PostsContainer} from "./posts/PostsContainer";


type ProfilePropsType = {
    users: Array<ProfileUsersType>
    posts:Array<PostsType>
    newText:string
    dispatch:(action:any)=>void
}



export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.profile_content}>

            <ProfileInfo users={props.users}/>

            <PostsContainer posts={props.posts}
                   dispatch={props.dispatch}
                   newText={props.newText}/>

        </div>
    );
};

