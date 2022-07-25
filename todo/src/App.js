import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: "Doctor",
        day: 'Feb 5th',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'food shopping',
        day: 'Feb 5th 2:30pm',
        reminder: false,
    }
])

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() *10000) +1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }



  //delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  const showHead = () => {
    setShowAddTask(!showAddTask)
  }
  return (
    <div className="container">
      <Header onShow={showHead} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle ={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
