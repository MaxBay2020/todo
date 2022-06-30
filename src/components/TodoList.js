import React, {useEffect, useState} from 'react';
import axios from 'axios'
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        // 从后端接收数据
        getData()
    }, []);

    const getData = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        res.status === 200 && setList(res.data)
    }

    return (
        <h1>
            To do list🤯
            {
                list.map( (todo, index) => {
                    return (
                        <TodoItem
                            key={index}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                        />
                    )
                } )
            }
        </h1>
    );
};

export default TodoList;
