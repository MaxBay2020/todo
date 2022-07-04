import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom'

const TodoDetail = () => {
    const [list, setList] = useState([])
    const [data, setData] = useState({});

    useEffect( () => {
        // 从后端接收数据
        getData()
    }, []);


    const getData = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        if(res.status === 200){
            setList(res.data)
            const newData = res.data.find(item => item.id.toString() === todoId)
            setData(newData)
        }
        // res.status === 200 && setList(res.data)
    }



    const params = useParams()
    const {todoId} = params


    return (
        <div>
            <div>id: {data.id}</div>
            <div>title: {data.title}</div>
            <div>completed: {data.completed ? '😃' : '😵‍💫'}</div>
        </div>
    );
};

export default TodoDetail;
