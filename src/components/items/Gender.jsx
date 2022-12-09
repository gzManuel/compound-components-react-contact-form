import React, {useContext} from 'react';
import {formContext} from '../../context';
import {setFormHOF} from '../../lib';

const Gender = () => {
    const {setFormState} = useContext(formContext);

    const handlerChange = (event) => {
        setFormState(setFormHOF('gender',event.target.value));
    }

    return (
        <div>
            <input type="radio" name="gender" id="gendeMaler" value="male" onChange={handlerChange} />
            <label htmlFor="gendeMaler">male</label>
            <input type="radio" name="gender" id="genderfemale" value="female" onChange={handlerChange} />
            <label htmlFor="genderfemale">female</label>
        </div>
    );
};

export default Gender;