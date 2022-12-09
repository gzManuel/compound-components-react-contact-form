import React, {useContext} from 'react';
import {formContext} from '../../context';
import { setFormHOF } from '../../lib';

const Name = ({required}) => {
    const {formState, setFormState} = useContext(formContext);

    const handlerChange = (event) => {
        setFormState(setFormHOF('name',event.target.value));
    }

    return (
        <div>
            <label htmlFor='name'>Name</label>
            <input required={required} name='name' id='name' type="text" value={formState.name} onChange={handlerChange}/>
        </div>
    );
};

export default Name;