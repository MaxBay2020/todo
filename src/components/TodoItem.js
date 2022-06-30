import React from 'react';

const TodoItem = ({id, title, completed}) => {

    return (
        <article style={{margin: '10px', border: '1px solid lightgray', boxShadow: '0 2px 20px lightgray'}}>
            <div>ID: <span>{id}</span></div>
            <div>Title: <span>{title}</span></div>
            <div>Completed: <span>{completed? '🌟' : '😵‍💫'}️</span></div>
        </article>
    );
};

export default TodoItem;
