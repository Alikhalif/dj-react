import React, { useState, useRef } from 'react'
import Filter from './Filter'
import { AiFillDelete  } from 'react-icons/ai'
import { TbEdit } from 'react-icons/tb'
import { useForm } from 'react-hook-form'


const styles = {
    todoItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '4px',
        marginBottom: '0.5rem',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    task:{
        display: 'flex',
        gap: '0.5rem',
    },
    btnContainer: {
        display: 'flex',
        gap: '0.5rem',
    },
    editButton: {
        color: '#ffc107',
        cursor: 'pointer',
    },
    deleteButton: {
        color: '#f44336',
        cursor: 'pointer',
    },
    modalContainer: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '500px',
    },
    cancelButton: {
        marginTop: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    input: {
        width: 'calc(100% - 80px)',
        padding: '0.75rem',
        margin: '0.5rem 0',
        borderRadius: '4px',
        border: '1px solid #ddd',
        fontSize: '1rem',
    },
};



const TodoList = ({todos, delTodo, update_todo, complete_todo, filter_todo}) => {

    let taskRef = useRef(null)

    let [todoId,  setTodoId]  = useState(0)
    let [task, setTask] = useState("")

    let [toggle, setToggle] = useState(false)

    let [todo, setTodo] = useState({})


    const todoItem = (task, id, todo) => {


        setTodoId(id)
        setTask(task)
        setToggle(true)
        setTodo(todo)
        
        
        console.log(toggle)
    }


    return (

        <>
        <div >
        

            { todos.map((todo, index) => (
            <div style={styles.todoItem} key={ index }>
                <div style={styles.task}>
                    <input type="checkbox" onChange={(e) => complete_todo(e, todo.id, todo)}/>
                    <p id = "t_task" className = {todo.completed == true ? "strike":"" } >{todo.task}</p>
                </div>
                <div style={styles.btnContainer}>
                    <div className="edit"> <TbEdit size={25} style={styles.editButton} onClick={(e) => todoItem(todo.task, todo.id, todo) } /> </div>
                    <div className="del"><AiFillDelete size={25} style={styles.deleteButton} onClick={ () =>delTodo(todo.id)}/></div>
                </div>
            </div>
            
            )  
            
            )}

            


            
            </div>



            {/* modal section */}

        { toggle &&  
        <div style={styles.modalContainer}>
        <div style={styles.modal}>
            <h1>Update Todo</h1>


            <form action="" onSubmit = { (e) => {update_todo(e, todoId, task); setToggle(false)} }>
                <input style={styles.input} type="text" ref={ taskRef } placeholder="Update Todo" value={task} onChange={(e)=>setTask(e.target.value)} required />
                <button style={styles.cancelButton} id ="add">Edit</button>
            </form>

                

        
            <div className="btn-container">
                <button style={styles.cancelButton} onClick={() => setToggle(false)}>Cancel</button>
            </div>
        </div>
        </div> 
        }
            
    




            </>
    )
}

export default TodoList