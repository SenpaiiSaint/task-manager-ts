import React from "react";

interface Task {
    id : number;
    text : string;
    completed : boolean;
}

interface TaskListProps {
    tasks : Task[];
    toggleTask : (id: number) => void;
    deleteTask : (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask, deleteTask }) => {
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className={task.completed ? "completed" : ""}>
                    <span onClick={() => toggleTask(task.id)}>{task.text}</span>
                    <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                        Delete
                    </button>
                    </li>
            ))}
        </ul>
    );
};

export default TaskList;