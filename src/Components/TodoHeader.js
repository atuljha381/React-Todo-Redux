import React, {useRef} from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../Store/Todo-slice'
import classes from './TodoHeader.module.css'
const makeId = () => {
      let ID = "";
      let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      for (var i = 0; i < 12; i++) {
        ID += characters.charAt(Math.floor(Math.random() * 36));
      }
      return ID;
    }

export default function TodoHeader(props) {
    const dispatch = useDispatch()
    const workInputRef = useRef()
    
    const onSubmitHandler = (event) => {
        event.preventDefault()
        const enteredWork = workInputRef.current.value
        const id = makeId()
        dispatch(todoActions.addTodo({
            id:id,
            work: enteredWork,
            status: 'pending',
        }))
    }
    
    // const {work, id} = props

  return (
      <section className={classes.text}>
          <form onSubmit={onSubmitHandler}>
              <div className='form-group container'>
                  <h1>TODO LIST!</h1>
                  <input type="text" className="form-control" required id='work' ref={workInputRef} />
                  <button className="btn btn-primary btn-lg w-100">Add</button>
              </div>
          </form>
      </section>
  )
}
