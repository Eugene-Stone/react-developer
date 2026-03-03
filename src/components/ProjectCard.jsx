import { Link } from 'react-router-dom';

export default function Project({ id, title, img }) {
	return (
		<li className="project">
			<Link to={`/projects/project/${id}`}>
				<img src={img} alt="Project img" className="project__img" />
				<h3 className="project__title">{title}</h3>
			</Link>
		</li>
	);
}
