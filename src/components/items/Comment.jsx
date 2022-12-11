import React from 'react';
import {setFormHOF} from '../../lib';

const Comment = ({required, comment, setFormState}) => {

    const handlerChange = (event) => {
        setFormState(setFormHOF('comment', event.target.value));
    }

    return (
        <div>
            <label htmlFor="comment">Comment </label>
            <textarea required={required} rows="3" cols="20" name='comment' id='comment' value={comment} onChange={handlerChange} />
        </div>
    );
};

export default Comment;