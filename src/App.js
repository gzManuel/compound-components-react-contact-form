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
          <ContactForm.Name/>
          <ContactForm.Gender/>
          <ContactForm.Email/>
          <ContactForm.Phone/>
          <ContactForm.Comment/>
        </ContactForm>
      </div>
    </div>

  );
}

export default App;
