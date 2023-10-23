import React from 'react';
import Comment from '../comment/comment';
import './commentList.modules.css';
import avatar from '../../assets/avatars/image-amyrobson.png';

const comments = [
    {
        imgSrc: avatar,
        name: 'amyrobson',
        you: false,
        posttime: '1 month ago',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dolor animi tenetur quia, praesentium iure temporibus corrupti est sint incidunt sed earum, eum ipsum assumenda aperiam cumque obcaecati cum tempora!',
        score: 0,
        youVoted: false,
        isReply: false
    }
    ,
    {
        imgSrc: avatar,
        name: 'amyrobson',
        you: true,
        posttime: '1 month ago',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dolor animi tenetur quia, praesentium iure temporibus corrupti est sint incidunt sed earum, eum ipsum assumenda aperiam cumque obcaecati cum tempora!',
        score: 0,
        youVoted: false,
        isReply: true
    }
    ,
    {
        imgSrc: avatar,
        name: 'amyrobson',
        you: false,
        posttime: '1 month ago',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dolor animi tenetur quia, praesentium iure temporibus corrupti est sint incidunt sed earum, eum ipsum assumenda aperiam cumque obcaecati cum tempora!',
        score: 0,
        youVoted: false,
        isReply: true
    }
]

function CommentList (props) {
    return (
        <div className='commentList__container'>
            {comments.map(comment => {
                return <Comment 
                            imgSrc={comment.imgSrc}
                            name={comment.name}
                            you={comment.you}
                            posttime={comment.posttime}
                            comment={comment.comment}
                            score={comment.score}
                            youVoted={comment.youVoted}
                            isReply={comment.isReply} />
            })}
        </div>
    )
}

export default CommentList;