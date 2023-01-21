import React from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../Store/Todo-slice'


export default function TodoPopulate(props) {
    const dispatch = useDispatch()

    const {id,work,status} = props.item

    const toggleHandler = (id) => {
        dispatch(todoActions.toggle(id))
    }

    const deleteHandler = () => {
        dispatch(todoActions.removeTodo(id))
    }

    return (
      <>
          <tbody>
            <tr key={id}>
              <td>{id}</td>
              <td>{work}</td>
              <td>{status}</td>
              <td>
                <button className="btn btn-success" onClick={() => toggleHandler(id)}>
                  Toggle
                </button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={deleteHandler}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        
      </>
    );
}
