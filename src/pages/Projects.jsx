import ProjectCard from '../components/ProjectCard';
import useProjectsContext from '../context/ProjectsContext/useProjectsContext';

export default function Projects() {
	const { projects } = useProjectsContext();

	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Projects</h2>

				<ul className="projects">
					{projects.map((project, index) => {
						return <ProjectCard key={project.id} {...project} />;
					})}
				</ul>
			</div>
		</main>
	);
}
