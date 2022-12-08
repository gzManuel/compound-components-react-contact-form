import React, {useContext} from 'react';
import { formContext } from '../../context';

const Email = () => {
    useContext(formContext);
    return (
        <div>
            <label for='email'>
                Email </label>
            <input type="email" name='name' id='email'/>
        </div>
    );
};

export default Email;