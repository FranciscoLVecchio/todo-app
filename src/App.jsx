import React from 'react';
import Form from './components/Form';

const  App = ({setTasks, tasks}) => {



  
  return (
    <div className="App">
      <div className="App-content">
        <h1>
          To Do App
        </h1>
        <Form />
      </div>
    </div>
  );
}

export default App