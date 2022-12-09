import React from 'react';
import ContactForm from './Forms/Contact';

const App = () => {
    return (
        <ContactForm name={{enabled: true, required: true}}
            email={{enabled: true, required: true}}
            phone={{enabled: true, required: false}}
            comments={{enabled: true, required: true}}
        />
    );
};

export default App;