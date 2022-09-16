import React from 'react';
import classes from "./Navigation.module.css";
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.nav_link}>
                <NavLink activeClassName={classes.active} to={"/profile"}>Profile</NavLink>
            </div>
            <div className={classes.nav_link}>
                <NavLink activeClassName={classes.active} to={"/dialogs"}>Messages</NavLink>
            </div>
            <div className={classes.nav_link}>
                <NavLink activeClassName={classes.active}
                         to={"/new"}>New</NavLink>
            </div>
            <div className={classes.nav_link}>
                <NavLink activeClassName={classes.active} to={"/music"}>Music</NavLink>
            </div>
            <div className={classes.nav_link}>
                <NavLink activeClassName={classes.active} to={"/settings"}>Settings</NavLink>
            </div>


        </nav>
    );
};

