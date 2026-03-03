import { useState, useEffect, createContext } from 'react';

const ProjectsContext = createContext();

export default function ProjectsProvider({ children }) {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch('/data/projects.json')
			.then((response) => response.json())
			.then((data) => setProjects(data))
			.catch((error) => console.error('Error fetch projects'));
	}, []);

	return <ProjectsContext.Provider value={{ projects }}>{children}</ProjectsContext.Provider>;
}

export { ProjectsContext };
