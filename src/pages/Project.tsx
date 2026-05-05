import { useParams } from 'react-router-dom';
import useProjectsContext from '../context/ProjectsContext/useProjectsContext';

export default function Project() {
	const { id } = useParams();
	const { projects } = useProjectsContext();

	if (!projects.length) {
		return <div></div>;
	}

	const project = projects.find((p) => Number(p.id) === Number(id));
	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">{project.title}</h1>
					<img
						src={project.img_big}
						alt={project.title}
						className="project-details__cover"
					/>
					<div className="project-details__desc">
						<p>{project.skills}</p>
					</div>
					<a href="#!" className="btn-outline">
						<img src="/img/icons/gitHub-black.svg" alt="" />
						GitHub repo
					</a>
				</div>
			</div>
		</main>
	);
}
