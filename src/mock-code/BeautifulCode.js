import React from 'react';
import ContactForm from './Forms/Contact';

const App = () => {
    return (
        <div>
            <ContactForm >
                <ContactForm.Name required />                  
                <ContactForm.Phone />
                <ContactForm.Email required />
                <ContactForm.Comments required/>
            </ContactForm>
        </div>
    );
};

export default App;