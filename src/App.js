import React from 'react';
import './App.css';
import CommentList from './containers/commentList/commentList';
import CommentForm from './containers/commentForm/commentForm';

function App() {
  return (
    <div className="App">
      <div className='comments__container'>
        <CommentList />
        <CommentForm />
      </div>
    </div>
  );
}

export default App;
