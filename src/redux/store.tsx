import profileUsersPageReducer, {profileUsersPageACType} from "./profileUsersPage-reducer";
import dialogsPageReducer, {dialogsPageReducerACType} from "./dialogsPage-reducer";


export type StoreType = {
    _state: appState,
    _renderEntireTree: () => void,
    subscribe: (observer: () => void) => void
    getState: () => appState,
    dispatch: (action:any) => void
}
export type appState = {
    profileUsersPage: profileUsers
    dialogsPage: dialogsType
}
 type dialogsType = {
    message: Array<messageType>
    dialogs: Array<dialogType>
    newMessageBody: string
}
 type dialogType = {}
 type messageType = {
    id: string
    name: string
    message: string
}
 type profileUsers = {
    profileUsers: Array<ProfileUsersType>
    posts: Array<PostsType>
    newPostText: string
}
 type PostsType = {
    id: number
    post: string
}
 type ProfileUsersType = {
    id: number
    name: string
    bigPhoto: string
    photo: string
    userInfo: UserInfoType
}
 type UserInfoType = {
    dataOfBirth: string
    city: string
    education: string
    webSite: string
}
export type actionType=profileUsersPageACType|dialogsPageReducerACType

const store: StoreType = {
    _state: {
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
            posts: [
                {id: 1, post: "Hi"},
                {id: 2, post: "It's my firs post"},
                {id: 3, post: "My name Kirill"},
            ],
            newPostText: ''
        },
        dialogsPage: {
            message: [
                {id: "1", name: "Kirill", message: "Hi"},
                {id: "2", name: "Kirill", message: "My name Kirill"},
                {id: "3", name: "Kirill", message: "I'm programmist"},
                {id: "4", name: "Alex", message: "OK"},
            ],
            newMessageBody: "",
            dialogs: [
                {}
            ]
        }
    },
    _renderEntireTree() {
        console.log()
    },
    subscribe(observer) {
        this._renderEntireTree = observer
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profileUsersPage = profileUsersPageReducer(this._state.profileUsersPage, action)
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
        this._renderEntireTree();
    }
}


export default store;