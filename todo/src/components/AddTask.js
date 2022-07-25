import { useState } from "react";
import { FaSleigh } from "react-icons/fa";



const AddTask = ({onAdd}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  
  const onSend = (e) => {
    e.preventDefault()
    if (!text) {
        alert('Please add a task')
        return
    } 
    onAdd({text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
  }
    return (
    <form className='add-form' onSubmit={onSend}>
        <div className='form-control'>
            <label>Task</label>
            <input type="text" placeholder="AddTask"
            value = {text} onChange={(e) => {
                setText(e.target.value)
            }} />
        </div>
        <div className='form-control'>
            <label>Day and Time</label>
            <input type="text" placeholder="AddTask" 
            value = {day} onChange={(e) => {
                setDay(e.target.value)
            }}/>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type="checkbox"
            checked={reminder}
            value = {reminder} onChange={(e) => {
                setReminder(e.currentTarget.checked)
            }}/>
        </div>

        <input className="btn btn-block" type="submit" value="Save task" />
    </form>
  )
}

export default AddTask