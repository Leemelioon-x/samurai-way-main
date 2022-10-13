
export type UserInfoType = {
    dataOfBirth: string
    city: string
    education: string
    webSite: string
}
export type PostsType = {
    id: number
    post: string
}
export type ProfileUsersType = {
    id: number
    name: string
    bigPhoto: string
    photo: string
    userInfo: UserInfoType
}
export type profileUsers = {
    profileUsers: Array<ProfileUsersType>
    posts: Array<PostsType>
    newPostText: string
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type profileUsersPageACType = UpdateNewPostTextActionType | AddPostActionType

let initialState:profileUsers={
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
        posts: [
        {id: 1, post: "Hi"},
        {id: 2, post: "It's my firs post"},
        {id: 3, post: "My name Kirill"},
    ],
        newPostText: ''
}

const profileUsersPageReducer = (state: profileUsers =initialState, action: profileUsersPageACType):profileUsers => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText
            };
            state.posts.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }

}


export let updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    } as const
}
export let addPostActionCreator = (newText: string) => {
    return {
        type: ADD_POST, newPostMessage: newText
    } as const
}
export default profileUsersPageReducer