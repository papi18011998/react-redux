import { useSelector } from "react-redux";

const TasksHeader = (props) => {
  const tasks = useSelector((state)=>state.todo)
  const undoneTasks = tasks.filter((t) => t.done === false);

  return (
    <header>
      <h1>React Todo List with Redux</h1>
      <p>
        Tâches à faire : <strong>{undoneTasks.length}</strong>
      </p>
    </header>
  );
};

export default TasksHeader;
