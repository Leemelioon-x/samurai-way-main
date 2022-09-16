import React from 'react';
import classes from "./Profile.module.css";
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

type ProfilePropsType = {
    users: Array<ProfileUserType>
    posts:Array<postsType>
    addPost:(newPostMessage:string)=>void
}

type postsType={
    id:number
    post:string
}

type ProfileUserType = {
    id: number,
    name: string,
    bigPhoto: string
    photo: string,
    userInfo: UserInfoType
}

type UserInfoType = {
    dataOfBirth: string,
    city: string,
    education: string,
    webSite: string
}


export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.profile_content}>

            <ProfileInfo users={props.users}/>

            <Posts posts={props.posts} addPost={props.addPost}/>

        </div>
    );
};

