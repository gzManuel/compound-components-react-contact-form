import React from 'react';
import ContactForm from './Forms/Contact';

const App = () => {
    return (
        <ContactForm >
            <ContactForm.Name required />
            <ContactForm.Phone />
            <ContactForm.Email required />
            <ContactForm.Comments required />
        </ContactForm>
    );
};

export default App;