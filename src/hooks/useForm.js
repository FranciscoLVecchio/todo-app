import { useState } from 'react'

export const useForm = () => {

    const [ todo, setTodo ] = useState({})
    const [ tasks, setTasks ] = useState([])
    const [ inputValue, setInputValue ] = useState('')


    const handleChange = ( { target } ) => {
      const { name, value } = target
      setTodo( { [ name ]: value } )
      setInputValue( target.value )
    }

    const handleClick = e => {
        if( Object.keys( todo ).length === 0 || todo.todo.trim() === '') {
            alert( 'el campo no puede estar vacio' )
            return
        }

        setTasks([ ...tasks, todo ])
    }

    const onSubmit = (e) => {
      e.preventDefault()
      setInputValue('')
    }

    const deleteTasks = indice => {
        const resetTodos = [ ...tasks ]
        resetTodos.splice( indice, 1 )
        setTasks( resetTodos )
    }

    const doneTasks = indice => {
        const markTasks = [...tasks]
        markTasks[indice].completed = true
        setTasks(markTasks)
    }


    // console.log(tasks)




  return {
    todo,
    tasks,
    inputValue,
    onSubmit,
    setTasks,
    handleChange,
    handleClick,
    deleteTasks,
    doneTasks
  }
}

