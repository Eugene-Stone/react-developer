import { useContext } from 'react';
import { ProjectsContext } from './ProjectsContext';

export default function useProjectsContext() {
	const context = useContext(ProjectsContext);

	if (!context) {
		throw new Error('ProjectsContext must be used within provider');
	}

	return context;
}
