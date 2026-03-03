import { NavLink } from 'react-router-dom';
import { useThemeContext } from '../context/useThemeContext.js';

export default function Header() {
	const { isDark, setIsDark } = useThemeContext();

	const linkClass = ({ isActive }) => {
		return isActive ? 'nav-list__link nav-list__link--active' : 'nav-list__link';
	};

	function handleChangeTheme() {
		setIsDark(!isDark);
	}

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to={'/'} className="logo">
						<strong>Developer</strong> portfolio
					</NavLink>

					<button
						className={`dark-mode-btn ${isDark && 'dark-mode-btn--active'}`}
						onClick={handleChangeTheme}>
						<img
							src="./img/icons/sun.svg"
							alt="Light mode"
							className="dark-mode-btn__icon"
						/>
						<img
							src="./img/icons/moon.svg"
							alt="Dark mode"
							className="dark-mode-btn__icon"
						/>
					</button>

					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink to="/" className={linkClass}>
								Home
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink to="/projects" className={linkClass}>
								Projects
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink to="/contacts" className={linkClass}>
								Contacts
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
