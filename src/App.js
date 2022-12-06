import {useState} from "react";
import Form from "./components/Form/Form";
import styles from './App.module.css'

function App() {

  const onFinish = (values) => {
    console.log("Hello world", values);
  }

  return (
    <div className={styles.layout}>
      <header style={}>
        <h1>My Compound design pattern</h1>
      </header>
      <div >
        <Form onFinish={onFinish}>
          <Form.Item label={'Password'} name='password'>
            <Form.Item.Input />
          </Form.Item>
          <Form.Item label={'User Name'} name='userName' >
            <Form.Item.Input />
          </Form.Item>

          <Form.Item>
            <Form.Item.Input type='submit'>

            </Form.Item.Input>
          </Form.Item>
        </Form>
      </div>
    </div>

  );
}

export default App;
