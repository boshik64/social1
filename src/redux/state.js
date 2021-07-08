import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";



let store = {
  _state: {
    profilePage: {
      postsData: [
          {id: 1, message: 'Пробую пропсы', likesCount: 23},
          {id: 2, message: 'Пробую выносить данные в массив', likesCount: 1322},
          {id: 3, message: 'Мапим массив с постами', likesCount: 13222}  
        ],
        
      newPostText: ''
    } ,

    dialogsPage: {
      dialogsData: [
          {id: 1, name: 'Marina'},
          {id: 2, name: 'Vladislav'},
          {id: 3, name: 'Ivan'},
          {id: 4, name: 'Sergey'}
        ] ,
      messagesData: [
          {id: 1, message: 'Hi'},
          {id: 2, message: 'как дела?'},
          {id: 3, message: 'верстаем диалоги'}
        ] ,

      newMessageBody: ""
    }

  },
  _callsubscriber() {
    console.log ('state chenged');
  },

  getState() {
    return this._state;
  },
  subscribe (observer) {
    this._callsubscriber = observer;
  },
  dispatch(action){

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callsubscriber(this._state);
  }
}

  export default store;
  window.store=store;