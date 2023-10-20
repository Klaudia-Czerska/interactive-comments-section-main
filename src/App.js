import React from 'react';
import logo from './logo.svg';
import './App.css';
import Score from './components/score/score'
import CommentList from './containers/commentList/commentList'

function App() {
  return (
    <div className="App">
      <div className='comments__container'>
        <CommentList />
        <div className='comments__post'>
          <img className='comments__post-avatar'></img>
          <form>
            <textarea
              name='postComment'
              defaultValue='Add a comment...'
              rows={4}
              cols={40}
            />
            <button type='submit'>SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
