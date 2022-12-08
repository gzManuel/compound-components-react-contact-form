import React, {useContext} from 'react';
import { formContext } from '../../context';

const Name = () => {
    useContext(formContext);
    return (
        <div>
            <label for='name'>Name</label>
            <input name='name' id='name' type="text"/>
        </div>
    );
};

export default Name;