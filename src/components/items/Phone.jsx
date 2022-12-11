import React from 'react';
import {setFormHOF} from '../../lib';

const Phone = ({required,phone,setFormState}) => {

    const handlerChange = (event) => {
        setFormState(setFormHOF('phone',event.target.value));
    }

    return (
        <div>
            <label htmlFor='phone'>Telephone </label>
            <input required={required} name='phone' id='phone' type="text" value={phone} onChange={handlerChange} />
        </div>
    );
};

export default Phone;