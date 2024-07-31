import { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import SearchBar from '../components/SearchBar';
import styles from '../styles/ToDoList.module.css';

const Home = ({ initialTasks = [] }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [query, setQuery] = useState('');
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks
    ? tasks.filter(task =>
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Todo List</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <TaskForm
        onAdd={addTask}
        onUpdate={updateTask}
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
      />
      <TaskList tasks={filteredTasks} onUpdate={updateTask} onDelete={deleteTask} />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    // Replace with your actual API endpoint
    const res = await fetch('https://api.example.com/tasks');
    
    // Check if the response is ok (status code in the range 200-299)
    if (!res.ok) {
      throw new Error(`Failed to fetch tasks: ${res.statusText}`);
    }

    const initialTasks = await res.json();
    
    return {
      props: {
        initialTasks,
      },
    };
  } catch (error) {
    console.error('Error fetching tasks:', error);

    return {
      props: {
        initialTasks: [], // Provide fallback data or an empty array
      },
    };
  }
}

export default Home;
