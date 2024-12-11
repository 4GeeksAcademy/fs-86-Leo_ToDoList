import React, {useState} from "react";
import "/src/styles/index.css";

const Home = () => {

	const [tareas, setTareas] = useState([
		{ text: "Prepare the class", completed: false },
		{ text: "Study Javascript", completed: false },
		{ text: "Clean my room", completed: false},
		{ text: "Do some workout", completed: false}
	  ]);
	const [newTareas, setNewTareas] = useState("");

	const addTareas = () => {
		if(newTareas.trim() != "") {
			setTareas([...tareas, {text: newTareas, completed: false}]);
			setNewTareas("");
		};
	};

	const toggleComplete = (index) => {
		const updatedTasks = [...tareas];
		updatedTasks[index].completed = !updatedTasks[index].completed;
		setTareas(updatedTasks);
	  };

	const removeTarea = (indexToRemove) => {
		setTareas(tareas.filter((_, index) => index !== indexToRemove));
	  };

	return (
		<div className="body">
			<h1>TO DO LIST!!</h1>
			<div className="list-container">
				<ul>
					<input
					type="text"
					placeholder="Add a new task"
					value={newTareas}
					onChange={(e) => setNewTareas(e.target.value)}
					/>
					<button onClick={addTareas}>Add Task</button>
					{tareas.map((tarea, index) => (
					<li key={index}>
						<input
						type="checkbox"
						checked={tarea.completed}
						onChange={() => toggleComplete(index)}
						/>
						<span className={tarea.completed ? "completed" : ""}>
						{tarea.text}
						</span>
						<button className="delete-button" onClick={() => removeTarea(index)}>X</button>
					</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Home;
