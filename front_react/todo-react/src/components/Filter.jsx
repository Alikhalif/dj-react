import React from 'react';

const styles = {
    select: {
        width: '100%',
        padding: '0.75rem',
        margin: '0.5rem 0',
        borderRadius: '4px',
        border: '1px solid #ddd',
        fontSize: '1rem',
        boxSizing: 'border-box',
        backgroundColor: '#f9f9f9',
    },
};

const Filter = ({ filter_todo }) => {
    return (
        <select style={styles.select} onChange={(e) => filter_todo(e.target.value)}>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
        </select>
    );
};

export default Filter;
