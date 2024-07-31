// src/components/TaskList.js
import TaskItem from './TaskItem';
import styles from '../styles/ToDoList.module.css';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
