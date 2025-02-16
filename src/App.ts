import React, {useState, useEffect } from "react";
import './App.css';

interface Task {
  id : number;
  text : string;
  completed : boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(
    JSON.parse(localStorage.getItem('tasks') || '[]')
  )
}