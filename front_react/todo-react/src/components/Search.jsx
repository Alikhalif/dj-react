import React from 'react';
import { useForm } from 'react-hook-form';

const styles = {
    input: {
        width: 'calc(100% - 90px)',
        padding: '0.75rem',
        margin: '0.5rem 0',
        borderRadius: '4px',
        border: '1px solid #ddd',
        fontSize: '1rem',
    },
    button: {
        padding: '0.75rem 1.5rem',
        backgroundColor: '#4a90e2',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginLeft: '10px',
    },
    error: {
        color: '#f44336',
        fontSize: '0.85rem',
        marginTop: '0.25rem',
    },
};

const Search = ({ addTodo }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit((data) => {
                addTodo(data);
                reset();
            })}>
                <input type="text" placeholder="Enter Todo" {...register("task", { required: true })} style={styles.input} />
                <button style={styles.button}>Add</button>
            </form>
            {errors.task && <small style={styles.error}>This field is required</small>}
        </div>
    );
};

export default Search;
