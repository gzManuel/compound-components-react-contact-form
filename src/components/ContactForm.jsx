import React, { useState} from 'react';
import Comment from './items/Comment';
import Email from './items/Email';
import Gender from './items/Gender';
import Name from './items/Name';
import Phone from './items/Phone';

import {formContext} from '../context';

const {Provider} = formContext;

const ContactForm = ({onFinish, children}) => {
    const [formState, setFormState] = useState({
        name:'',
        comment:'',
        email:'',
        gender:'',
        phone:''
    });

    const submitHandler = (event) => {
        event.preventDefault();
        onFinish(formState);
    }

    return (
        <Provider value={{formState, setFormState}}>
            <form onSubmit={submitHandler} >
                {children}
                <button>Send</button>
            </form>
        </Provider>
    );
};

ContactForm.Comment = Comment;
ContactForm.Email = Email;
ContactForm.Gender = Gender;
ContactForm.Name = Name;
ContactForm.Phone = Phone;


export default ContactForm;