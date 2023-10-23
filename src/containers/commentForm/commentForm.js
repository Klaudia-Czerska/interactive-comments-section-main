import React from 'react';
import './commentForm.modules.css';
import avatar from '../../assets/avatars/image-juliusomo.png';

function CommentForm () {
    return (
        <div className='comments__post'>
          <img className='comments__post-avatar' src={avatar}></img>
          <form className='comments__post-form'>
            <textarea
              className='comments__post-text'
              name='postComment'
              defaultValue='Add a comment...'
              rows={4}
              cols={40}
            />
            <button type='submit' className='comments__post-submit'>SEND</button>
          </form>
        </div>
    )
}

export default CommentForm;