import React from 'react';
import {setFormHOF} from '../../lib';

const Email = ( {required, email, setFormState} ) => {

    const handlerChange = (event) => {
        setFormState(setFormHOF('email',event.target.value));
    }

    return (
        <div>
            <label htmlFor='email'>
                Email </label>
            <input required={required} type="email" name='name' id='email' value={email} onChange={handlerChange} />
        </div>
    );
};

export default Email;