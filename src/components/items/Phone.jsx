import React from 'react';
import { formContext } from '../../context';

const Phone = () => {
    
    return (
        <div>
            <label for='phone'>Telephone </label>
            <input name='phone' id='phone' type="text"/>
        </div>
    );
};

export default Phone;