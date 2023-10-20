import React from 'react';
import Score from '../../components/score/score';
import './comment.modules.css';
import avatar from '../../assets/avatars/image-amyrobson.png';
import del from '../../assets/icon-delete.svg';
import edit from '../../assets/icon-edit.svg';
import reply from '../../assets/icon-reply.svg';

function Comment (props) {
    return (
        <div className='comment__container'>
            <Score />
            <div className='comment__section'>
                <div className='comment__section-info'>
                    <img className='comment__section-avatar' src={avatar}></img>
                    <span className='comment__section-username'>amyrobson</span>
                    <span className='comment__section-posttime'>1 month ago</span>
                </div>
                
                <div className='comment__section-buttons'>
                    <button className='comment__section-delete-button'><img src={del}></img> Delete</button>
                    <button className='comment__section-edit-button'><img src={edit}></img> Edit</button>
                    <button className='comment__section-reply-button'><img src={reply}></img> Reply</button>
                </div>
                <p className='comment__section-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dolor animi tenetur quia, praesentium iure temporibus corrupti est sint incidunt sed earum, eum ipsum assumenda aperiam cumque obcaecati cum tempora!</p>
            </div>
        </div>
        
    )
}

export default Comment;