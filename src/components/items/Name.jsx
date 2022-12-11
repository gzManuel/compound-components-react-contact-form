import React from 'react';
import { setFormHOF } from '../../lib';

const Name = ({required,name,setFormState}) => {

    const handlerChange = (event) => {
        setFormState(setFormHOF('name',event.target.value));
    }

    return (
        <div>
            <label htmlFor='name'>Name</label>
            <input required={required} name='name' id='name' type="text" value={name} onChange={handlerChange}/>
        </div>
    );
};

export default Name;