import React, {useContext} from 'react';
import {formContext} from '../../context';
import {setFormHOF} from '../../lib';

const Email = ( {required} ) => {
    const {formState, setFormState} = useContext(formContext);

    const handlerChange = (event) => {
        setFormState(setFormHOF('email',event.target.value));
    }

    return (
        <div>
            <label htmlFor='email'>
                Email </label>
            <input required={required} type="email" name='name' id='email' value={formState.email} onChange={handlerChange} />
        </div>
    );
};

export default Email;