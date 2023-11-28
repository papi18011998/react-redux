import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TasksList = (props) => {
  // appel du store en utilsant le hook useSelector disponible sur redux
  const tasks = useSelector((state)=>state.todo)
  return (
    <>
      {tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
        />
      ))}
    </>
  );
};

export default TasksList;
