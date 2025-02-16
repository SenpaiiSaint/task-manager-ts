import React, { useState } from "react";

interface TaskInputProps {
    addTask: (taskText : string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        if (input.trim() !== "") {
            addTask(input);
            setInput("");
        }
    };

    return (
        <div className="input-container">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task..."
            />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default TaskInput;