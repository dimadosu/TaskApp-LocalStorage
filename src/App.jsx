import { useEffect, useState } from "react";
import "./App.css";
import { TaskCreator } from "./Components/TaskCreator";
import { TaskTable } from "./Components/TaskTable";
import { VisibilituControl } from "./Components/VisibilituControl";

function App() {
  const [tasksItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState([false])


  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
      //console.log(JSON.parse(data))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  const createNewTask = (taskName) => {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTaskItems([...tasksItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (task) => {
    setTaskItems(
      tasksItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const cleanTasks = () => {
    setTaskItems(tasksItems.filter(task => !task.done))
  }

  return (
    <>
      <main className="bg-dark vh-100 text-white">
        <div className="container col-md-4 offset-md-4 p-4">
          <TaskCreator createNewTask={createNewTask}></TaskCreator>
          <TaskTable tasks={tasksItems} toggleTask={toggleTask}></TaskTable>
          <VisibilituControl
            isChecked={showCompleted}
            setShowCompleted={(checked) => setShowCompleted(checked)}
            cleanTasks={cleanTasks}
          />
          {
            showCompleted === true && (
              <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted}></TaskTable>
            )
          }
        </div>
      </main>
    </>
  );
}

export default App;
