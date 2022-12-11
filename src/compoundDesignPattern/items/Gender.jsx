import React, {useContext} from 'react';
import {formContext} from '../../context';
import {setFormHOF} from '../../lib';

const Gender = ({required}) => {
    const {setFormState} = useContext(formContext);

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