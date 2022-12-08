import React, {useContext} from 'react';
import {formContext} from '../../context';

const Comment = () => {
    const {formstate} = useContext(formContext);


    return (
        <div>
            <label for="comment">Comment </label>
            <textarea rows="3" cols="20" name='comment' id='comment' value={formstate.comment} onChange={() => {}} />
        </div>
    );
};

export default Comment;