import ContactForm from "./components/ContactForm";
import styles from './App.module.css'

function App() {

  const onFinish = (values) => {
    console.log("Hello world", values);
  }

  return (
    <div className={styles.layout}>
      <header>
        <h1>My Compound design pattern</h1>
      </header>
      <div >
        <ContactForm onFinish={onFinish}>
          <ContactForm.Name required/>
          <ContactForm.Gender/>
          <ContactForm.Email required/>
          <ContactForm.Phone required/>
          <ContactForm.Comment required/>
        </ContactForm>
      </div>
    </div>

  );
}

export default App;
