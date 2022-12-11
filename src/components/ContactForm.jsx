import React, {useState} from 'react';
import Comment from './items/Comment';
import Email from './items/Email';
import Gender from './items/Gender';
import Name from './items/Name';
import Phone from './items/Phone';
import styles from './ContactForm.module.css';

const ContactForm = ({onFinish}) => {
    const [formState, setFormState] = useState({
        name: '',
        comment: '',
        email: '',
        gender: '',
        phone: ''
    });

    const {name, comment, email, gender, phone} = formState;

    const submitHandler = (event) => {
        event.preventDefault();
        onFinish(formState);
    }

    return (
        <div className={styles.form}>
            <h2 className={styles.titleForm}>Contact Me</h2>
            <form onSubmit={submitHandler}  >
                <Name required name={name} setFormState={setFormState} />
                <Email required email={email} setFormState={setFormState} />
                <Phone required phone={phone} setFormState={setFormState}/>
                <Comment required comment={comment} setFormState={setFormState}/>
                <input type='submit' value={'send'} />
            </form>
        </div>
    );
};

export default ContactForm;