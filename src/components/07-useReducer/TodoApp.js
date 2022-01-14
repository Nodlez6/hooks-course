import React, { useReducer, useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import './styles.css'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
}

export const TodoApp = () => {

    const [ todos , dispatch ] = useReducer(todoReducer, [] , init);

    useEffect(() => {
        
        localStorage.setItem( 'todos' , JSON.stringify( todos ) )
        
    }, [todos])

    const handleDelete = ( todoId ) => {

        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch( action )
    }

    const handleToggle = ( todoId ) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })

    }

    const handleAddTodo = ( newTodo ) => {
        dispatch( {
            type: 'add',
            payload: newTodo
        } )
    }


    return (
        <>
            <h1>Todo App  ( { todos.length } ) </h1>
            <hr/>


            <div className='row'>
                <div className='col-7'>
                    <TodoList 
                        todos={ todos } 
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                    />
                </div>

                <div className='col-5'>
                    <TodoAdd
                        handleAddTodo={ handleAddTodo }
                    />
                </div>

            </div>



        </>
    )
}
