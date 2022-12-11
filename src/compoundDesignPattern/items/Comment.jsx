import React, {useContext} from 'react';
import {formContext} from '../../context';
import {setFormHOF} from '../../lib';

const Comment = ({required}) => {
    const {formState, setFormState} = useContext(formContext);

    const {comment} = formState;

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