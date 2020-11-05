import React, {useState} from 'react'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Button, List, ListItem, ListItemText, ListItemAvatar, Modal, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
function Todo(props) {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [input,setInput]= useState();
    const handleOpen = () => {
            setOpen(true);
        };
        const updateTodo =() => {
            //update the todo with input text
            db.collection('todos').doc(props.todo.id).set({
             todo: input
            },{merge: true})//this prevents overriding what is already there
            setOpen(false);
        }
    //props are used to extraxt elements
    return (
        <>
        <Modal
           open={open}
           onclose={e =>setOpen(false)}>
           <div className={classes.paper}>
               <input placeholder= {props.todo.todo} value ={input} onChange={event => setInput(event.target.value)}/>
               <Button onClick={updateTodo}>Update Todo</Button>
           </div>
        </Modal>
        <List className="todo__list">
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItem>
            <ListItemText primary={props.todo.todo} secondary="Dummy Deadline"/>
        </ListItem>
        <button onClick={e =>setOpen(true)}>Edit</button>
        <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
        </>
    )
}

export default Todo
