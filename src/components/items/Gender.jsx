import React from 'react';
import {setFormHOF} from '../../lib';

const Gender = ({required, setFormState}) => {

    const handlerChange = (event) => {
        setFormState(setFormHOF('gender',event.target.value));
    }

    return (
        <div>
            <label htmlFor="gendeMaler">Male</label>
            <input required={required} type="radio" name="gender" id="gendeMaler" value="male" onChange={handlerChange} />
            <label htmlFor="genderfemale">Female</label>
            <input required={required} type="radio" name="gender" id="genderfemale" value="female" onChange={handlerChange} />
        </div>
    );
};

export default Gender;