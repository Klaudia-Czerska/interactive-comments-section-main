import React, { useState } from 'react';
import './score.modules.css'
import plus from '../../assets/icon-plus.svg';
import minus from '../../assets/icon-minus.svg';

function Score() {
    const [score, setScore] = useState(0);

    const handleAddingPoint = (e) => {
        e.preventDefault();
        setScore(prev => prev + 1);
    }

    const handleRemovingPoint = (e) => {
        e.preventDefault();
        setScore(prev => prev - 1);
    }

    return (
        <div className='comment__rating'>
            <button className='comment__rating-plus' onClick={handleAddingPoint}><img src={plus}></img></button>
            <span className='comment__rating-score'>{score}</span>
            <button className='comment__rating-minus' onClick={handleRemovingPoint}><img src={minus}></img></button>
        </div>
    )
}

export default Score;