import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';


const App = (props) => {



  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={ () => <Profile state={props.state.profilePage} 
                                                        addPost={props.addPost}
                                                        updateNewPostText={props.updateNewPostText} />} />
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
        </div>
    </div>
    </BrowserRouter>); 
}

export default App;
