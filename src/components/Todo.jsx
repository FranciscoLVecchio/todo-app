import React from 'react'

const Todo = ({todo, index, deleteTasks, doneTasks, isDone}) => {
    return (
        <>
            <div className="list">
                <h3 className={isDone ? 'isDone' : ''}>{ todo }</h3> <button className="btn-done"  onClick={ () => deleteTasks(index) }>Delete</button> <button className='btn-done' onClick={ () => doneTasks(index) }>Done</button>
            </div>
        </>
    )
}

export default Todo