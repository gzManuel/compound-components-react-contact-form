import React, {useContext} from 'react';
import {formContext} from '../../context';
import {setFormHOF} from '../../lib';

const Email = () => {
    const {formState, setFormState} = useContext(formContext);

    const handlerChange = (event) => {
        setFormState(setFormHOF('email',event.target.value));
    }

    return (
        <div>
            <label htmlFor='email'>
                Email </label>
            <input type="email" name='name' id='email' value={formState.email} onChange={handlerChange} />
        </div>
    );
};

export default Email;