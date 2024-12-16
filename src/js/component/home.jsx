import React, {useState} from "react";
import "/src/styles/index.css";

const Home = () => {

	const [tasks, setTasks] = useState([
		{ text: "Prepare the class", completed: false },
		{ text: "Study Javascript", completed: false },
		{ text: "Clean my room", completed: false},
		{ text: "Do some workout", completed: false}
	  ]);
	const [newTasks, setNewTasks] = useState("");

	const addTasks = () => {
		if(newTasks.trim() !== "") {
			setTasks([...tasks, {text: newTasks, completed: false}]);
			setNewTasks("");
		};
	};

	const taskComplete = (index) => {
		const updatedTasks = [...tasks];
		updatedTasks[index].completed = !updatedTasks[index].completed;
		setTasks(updatedTasks);
	  };

	const removeTarea = (indexToRemove) => {
		setTasks(tasks.filter((_, index) => index !== indexToRemove));
	  };

	return (
		<div className="body">
			<h1>TO DO LIST!!</h1>
			<div className="list-container">
				<ul>
					<input
					type="text"
					placeholder="Add a new task"
					value={newTasks}
					onChange={(e) => setNewTasks(e.target.value)}
					/>
					<button onClick={addTasks}>Add Task</button>
					{tasks.map((tasks, index) => (
					<li key={index}>
						<input
						type="checkbox"
						checked={tasks.completed}
						onChange={() => taskComplete(index)}
						/>
						<span className={tasks.completed ? "completed" : ""}>
						{tasks.text}
						</span>
						<button className="delete-button" onClick={() => removeTarea(index)}>X</button>
					</li>
					))}
				</ul>
				<p className="counter">Uncompleted Tasks: {tasks.length}</p>
			</div>
		</div>
	);
};

export default Home;
