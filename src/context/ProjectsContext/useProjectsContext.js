import { useContext } from 'react';
import { ProjectsContext } from './ProjectsContext.jsx'

export default function useProjectsContext() {
	const context = useContext(ProjectsContext);
	
	return context;
}
