import { Link } from 'react-router-dom';

export default function NotFoundPage() {
	return (
		<main className="section page-404" style={{ textAlign: 'center' }}>
			<h1>Page not found</h1>
			<br />
			<div className="button__box">
				<Link to={'/'}>
					<button className="btn">Go back home</button>
				</Link>
			</div>
		</main>
	);
}
