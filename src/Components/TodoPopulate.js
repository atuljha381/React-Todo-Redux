import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoActions } from '../Store/Todo-slice'
const todoData = [
    {id:'1', work: 'react'},
    {id:'2', work: 'express'},
]

export default function TodoPopulate(props) {
    const dispatch = useDispatch()
    const tododata = useSelector( state => state.todo)
    console.log('atul',tododata)

    const toggleHandler = () => {
        dispatch(todoActions.toggle())
    }

    const deleteHandler = () => {
        dispatch(todoActions.removeTodo(todoData.id))
    }

    return (
        <>
            {todoData?.map((data) => (
                <tbody key={data.id}>
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.work}</td>
                        <td>{data.status}</td>
                        <td><button className='btn btn-success' onClick={toggleHandler} >Toggle</button></td>
                        <td><button className='btn btn-danger' onClick={deleteHandler}>Delete</button></td>
                    </tr>
                </tbody>
            ))
            }
        </>
    )
}
