import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState('')
    
    const addTodo = () => {
        if (todo === '') {
            alert('Please enter a task first.')
            return
        }
        setTodoList([...todoList, todo])
        setTodo('')
    }
    
    const removeTodo = (index) => {
        const newTodoList = todoList.filter((_, i) => i !== index)
        setTodoList(newTodoList)
    }
    
    const editTodo = (index) => {
        const newTodo = prompt('Enter new todo')
        const copyList = [...todoList]
        copyList[index] = newTodo
        setTodoList(copyList)
    }

    return (
    <>
    <div className="container">
        <div className="h1 text-center text-primary mt-5">Todo Application</div>
        <div className="row">
            <div className="col-lg-6 mx-auto">
                <input className="form-control mt-3" id="todoInput" type="text" placeholder="Write your task here.."
                    aria-label="default input example" onChange={(e) => {setTodo(e.target.value)}}/>
                <button type="button" id="addBtn" className="btn btn-primary w-100 mt-3" onClick={addTodo}>Add Task</button>
                <div className="list-group mt-3">
                    {todoList.map((todo, index) => (
                        <div key={index} className="list-group-item list-group-item-action d-flex justify-content-between">
                            <div>{todo}</div>
                            <div>
                                <button className="btn btn-danger" onClick={() => removeTodo(index)}>Delete</button>
                                <button className="btn btn-info ms-2" onClick={() => editTodo(index)}>Edit</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Todo
