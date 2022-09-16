import React from 'react';

import classes from "./ProfileInfo.module.css";

type ProfilePropsType = {
    users: Array<ProfileUserType>
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


export const ProfileInfo = (props:ProfilePropsType) => {
    return (
        <div>
            <div className={classes.profile_bigPhoto}>
                <img src={props.users[0].bigPhoto} alt=""/>
            </div>
            <div className={classes.profile_photo}>
                <img src={props.users[0].photo} alt=""/>
                <div className={classes.profile_name}>
                    {props.users[0].name}
                </div>
                <ul className={classes.profile_info}>
                    <li>{props.users[0].userInfo.dataOfBirth}</li>
                    <li>{props.users[0].userInfo.city}</li>
                    <li>{props.users[0].userInfo.education}</li>
                    <li><a href="">{props.users[0].userInfo.webSite}</a></li>
                </ul>
            </div>
        </div>
    );
};


