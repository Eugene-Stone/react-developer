import { Link } from 'react-router-dom';
import { ProjectType } from '../context/ProjectsContext/ProjectsContext';

export default function Project({ id, title, img }: ProjectType) {
	return (
		<li className="project">
			<Link to={`/projects/project/${id}`}>
				<img src={img} alt="Project img" className="project__img" />
				<h3 className="project__title">{title}</h3>
			</Link>
		</li>
	);
}
