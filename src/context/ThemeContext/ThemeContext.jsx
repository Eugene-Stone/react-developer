import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
	const [isDark, setIsDark] = useState(() => {
		const savedTheme = localStorage.getItem('isDark');

		return savedTheme ? JSON.parse(savedTheme) : true;
	});

	useEffect(() => {
		localStorage.setItem('isDark', isDark);

		const themeClass = isDark ? 'dark' : 'light';

		document.body.classList.remove('dark', 'light');
		document.body.classList.add(themeClass);
	}, [isDark]);

	return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>;
}

export { ThemeContext };
