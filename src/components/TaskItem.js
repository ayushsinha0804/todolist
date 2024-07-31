import { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  const handleMarkAsDone = () => {
    onUpdate({ ...task, completed: !task.completed });
  };

  if (!task) return null;

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3 onClick={handleToggle}>{task.title}</h3>
      {isExpanded && (
        <div>
          <p>{task.description}</p>
          <p>Last updated: {new Date(task.timestamp).toLocaleString()}</p>
        </div>
      )}
      <button onClick={handleMarkAsDone}>
        {task.completed ? 'Undo' : 'Mark as Done'}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
