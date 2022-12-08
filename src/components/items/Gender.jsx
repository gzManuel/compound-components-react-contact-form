import React, {useContext} from 'react';
import { formContext } from '../../context';

const Gender = () => {
    useContext(formContext);
    return (
        <div>
            <input type="radio" name="gender" id="register_gendermale" value="male" />
            <label for="gendeMaler">male</label>
            <input type="radio" name="gender" id="genderfemale" value="female" />
            <label for="genderfemale">female</label>
        </div>
    );
};

export default Gender;