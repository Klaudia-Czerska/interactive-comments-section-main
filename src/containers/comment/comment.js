import React from 'react';
import Score from '../../components/score/score';
import './comment.modules.css';
import del from '../../assets/icon-delete.svg';
import edit from '../../assets/icon-edit.svg';
import reply from '../../assets/icon-reply.svg';

function Comment ({ imgSrc, name, you, posttime, comment, score, youVoted, isReply }) {
    return (
        <div className={isReply ? 'comment__container--reply' : 'comment__container'}>
            <Score score={score} youVoted={youVoted} />
            <div className='comment__section'>
                <div className='comment__section-info'>
                    <img className='comment__section-avatar' src={imgSrc}></img>
                    <div className='comment__section-username-container'>
                        <span className='comment__section-username'>{name}</span>
                        <span className={you ? 'comment__section-you--visible' : 'comment__section-you'}>you</span>
                    </div>
                    <span className='comment__section-posttime'>{posttime}</span>
                </div>
                
                <div className='comment__section-buttons'>
                    <button className={you ? 'comment__section-delete-button--visible' : 'comment__section-delete-button'}><img src={del}></img> Delete</button>
                    <button className={you ?'comment__section-edit-button--visible' : 'comment__section-edit-button'}><img src={edit}></img> Edit</button>
                    <button className={you ? 'comment__section-reply-button' : 'comment__section-reply-button--visible'}><img src={reply}></img> Reply</button>
                </div>
                <p className='comment__section-text'>{comment}</p>
            </div>
        </div>
        
    )
}

export default Comment;