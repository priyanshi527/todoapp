import React , { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
function App() { 
  const [todos, setTodos] = useState([]);
  const [input,setInput] = useState('');
  //when the app loads ,we need to listen to the database and fetch new todos as they get added or removed
  //it runs once the app loads'
  //it listens everything changing in the firebase1
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [])//every time input loads this will work

  const addTodo = (event) => {
    //this will fireon when we click buttons
    //it stores input it the todos and keep appending new input
    //connecting our input to firebase
     //timestamp is for order of events
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //don't refresh the page while submitting
    event.preventDefault();
   // setTodos([...todos, input]);
    setInput('');// to clear the input space after we click the add todo button
  }
  return (
    <div className="App">
      <h1>Hello Friends!!</h1>
      <form>
      <FormControl>
        <InputLabel>Write a to-do</InputLabel>
        <Input value = {input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add To-do</Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
