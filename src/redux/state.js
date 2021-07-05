let store = {
  _state: {
    profilePage: {
      postsData: [
          {id: 1, message: 'Пробую пропсы', likesCount: 23},
          {id: 2, message: 'Пробую выносить данные в массив', likesCount: 1322},
          {id: 3, message: 'Мапим массив с постами', likesCount: 13222}  
        ],
        
      newPostText: 'Теперь я могу добавить пост из textarea'
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
        ]
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

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 666
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callsubscriber (this._state);
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText ;
    this._callsubscriber (this._state);
  },
  dispatch(action){
    
  }
}


  export default store;
  window.store=store;