import { useDispatch } from "react-redux";
import { createToggle, deleteTask, toggleTask } from "./redux";

const TaskItem = (props) => {
  const { task} = props;

  //utilisation des dispatchers pour distribuer les fonction de MAJ de todo
  const dispatch = useDispatch(); 
  
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        {task.text}

        <span
          onClick={() => dispatch(deleteTask(task.id))}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          X
        </span>
      </label>
    </div>
  );
};

export default TaskItem;
