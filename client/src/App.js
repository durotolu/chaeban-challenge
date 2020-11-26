import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input'

const initialinputFields = {
  date: "",
  message: "",
}

function App() {
  const [inputFields, setInputFields] = useState(initialinputFields);

  const onValueChange = e => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value
    });
  };

  const onCreateAccount = e => {
    console.log(inputFields);
    setInputFields(initialinputFields)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Input inputFields={inputFields} onValueChange={onValueChange} onCreateAccount={onCreateAccount} />
      </header>
    </div>
  );
}

export default App;
