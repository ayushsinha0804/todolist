import { useState, useEffect } from 'react';
import styles from '../styles/ToDoList.module.css';

const TaskForm = ({ onAdd, onUpdate, currentTask, setCurrentTask }) => {
  const [title, setTitle] = useState(currentTask ? currentTask.title : '');
  const [description, setDescription] = useState(currentTask ? currentTask.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: currentTask ? currentTask.id : Date.now(),
      title,
      description,
      completed: currentTask ? currentTask.completed : false,
      timestamp: new Date().toISOString(),
    };
    if (currentTask) {
      onUpdate(task);
    } else {
      onAdd(task);
    }
    setTitle('');
    setDescription('');
    setCurrentTask(null);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        required
      />
      <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
