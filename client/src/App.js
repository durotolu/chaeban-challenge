import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Output from './components/Output';

const initialinputFields = {
  date: "",
  message: "",
}

function App() {
  const [inputFields, setInputFields] = useState(initialinputFields);
  const [outputFields, setOutputFields] = useState({});

  const onValueChange = e => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value
    });
  };

  const onCreateAccount = e => {
    setOutputFields(inputFields)
    setInputFields(initialinputFields)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/' render={props => {
          return <Input {...props} inputFields={inputFields} onValueChange={onValueChange} onCreateAccount={onCreateAccount} />
        }} />
        <Route exact path='/' render={props => {
          return <Output {...props} outputFields={outputFields} />
        }} />
      </header>
    </div>
  );
}

export default App;