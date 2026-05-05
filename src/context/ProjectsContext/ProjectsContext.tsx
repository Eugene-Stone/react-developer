import { useState, useEffect, createContext } from 'react';

export type ProjectType = {
	id: number;
	title: string;
	skills?: string;
	img: string;
	img_big?: string;
};

type ProjectsContextType = {
	projects: ProjectType[];
};

type ContextProps = {
	children: React.ReactNode;
};

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export default function ProjectsProvider({ children }: ContextProps) {
	const [projects, setProjects] = useState<ProjectType[]>([]);

	useEffect(() => {
		fetch('/data/projects.json')
			.then((response) => response.json())
			.then((data: ProjectType[]) => setProjects(data))
			.catch((error) => console.error('Error fetch projects'));
	}, []);

	return <ProjectsContext.Provider value={{ projects }}>{children}</ProjectsContext.Provider>;
}

export { ProjectsContext };
