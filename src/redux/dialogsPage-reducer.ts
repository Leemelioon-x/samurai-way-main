import {dialogsType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


export type AddNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyActionCreator>
export type SendMessage = ReturnType<typeof sendMessageActionCreator>
export type dialogsPageReducerACType = AddNewMessageBodyActionType | SendMessage

let initialState={
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

const dialogsPageReducer = (state: dialogsType = initialState, action: dialogsPageReducerACType):dialogsType => {
    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            state.newMessageBody = action.newMessageBodyText;
            return state
        case "SEND_MESSAGE":
            let newMessag = {
                id: "1", name: "Kirill", message: action.newMessage
            }
            state.message.push(newMessag);
            return state
        default:
            return state
    }

}


export let updateNewMessageBodyActionCreator = (newMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, newMessageBodyText: newMessage
    } as const
}
export let sendMessageActionCreator = (newMessage: string) => {
    return {
        type: SEND_MESSAGE, newMessage: newMessage
    } as const
}

export default dialogsPageReducer