import React, {createContext, useState} from 'react';
import Input from './Input';
import Item from './Item';

const formContext = createContext();

const {Provider} = formContext;

const Form = ({onFinish, children}) => {

    const [formState, setFormState] = useState({});

    const submitHandler = (event) => {
        event.preventDefault();
        onFinish(formState);
    }

    return (
        <Provider value={formState}>
            <form onSubmit={submitHandler} >
                {children}
            </form>
        </Provider>
    );
};

Form.Item = Item;
Form.Item.Input = Input;

export default Form;