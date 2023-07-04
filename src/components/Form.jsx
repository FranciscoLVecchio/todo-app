import React from 'react'
import Todo from './Todo'
// import { Message } from './Message'
import { useForm } from '../hooks/useForm'

const Form = () => {

  const { tasks, handleChange, handleClick, deleteTasks, doneTasks, onSubmit, inputValue } = useForm()

    return (
        <>
            <form onSubmit={ onSubmit } >
                <label>New Task</label>
                <input type="text" name="todo" value={inputValue} onChange={ handleChange } />
                <button onClick={ handleClick }>Add</button>
            </form>
            {
              tasks.map((value, index) => (
                <Todo todo={value.todo} key={index} index={index} deleteTasks={deleteTasks} doneTasks={doneTasks} isDone={value.completed}/>
                ))
              }
        </>
    )
}

export default Form