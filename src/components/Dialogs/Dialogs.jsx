import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import classes from  './Dialogs.module.css';
import Message from "./Message/Message";



const Dialogs = (props) => {


let state=props.store.getState().dialogsPage;
    
let dialogsEleqments = state.dialogsData
.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} /> )

let messagesElements = state.messagesData
.map ( message => <Message message={message.message} /> )

let newMessageBody = state.newMessageBody; 

let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
}

let onNewMessageChenge = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
}

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsEleqments}
            </div>    

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChenge} placeholder='Введите сообщение'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    
    )
}

export default Dialogs;