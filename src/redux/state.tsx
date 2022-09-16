import {renderEntireTree} from "../render";


export const state = {
    profileUsersPage: {
        profileUsers: [{
            id: 1,
            name: "Martynchuk Kirill",
            bigPhoto: "http://e1mebel.ru/Stena_panel/1/25.jpg",
            photo: "https://sun9-west.userapi.com/sun9-14/s/v1/ig2/ayX2Dzz_0DEueAkockzF7q7R-fZF-TfI6KdY9lvOOhvGtq3JchqxcRI9hg6Gwdnx4m9Wv3u3H3rbKqiVYDrCR98e.jpg?size=708x1080&quality=96&type=album",
            userInfo: {
                dataOfBirth: "26 November 2001",
                city: "Pinsk",
                education: "BNTU",
                webSite: "https://vk.com/leemelioon"
            }
        }],
        posts:[
            {id:1, post:"Hi"},
            {id:2, post:"It's my firs post"},
            {id:3, post:"My name Kirill"},
        ]
    },
    dialogsPage: {
        message: [
            {id: "1", name: "Kirill", message: "Hi"},
            {id: "2", name: "Kirill", message: "My name Kirill"},
            {id: "3", name: "Kirill", message: "I'm programmist"},
            {id: "4", name: "Alex", message: "OK"},
        ],
        dialogs: [
            {}
    ]
    }
}

export let addPost=(newPostMessage:string)=>{
    let newPost={
        id:5,
        post:newPostMessage
    }
    state.profileUsersPage.posts.push(newPost)
      renderEntireTree(state);
}