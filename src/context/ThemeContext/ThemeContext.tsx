import { createContext, useState, useEffect } from 'react';

type ThemeContextType = {
	isDark: boolean;
	setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [isDark, setIsDark] = useState<boolean>(() => {
		const savedTheme = localStorage.getItem('isDark');

		return savedTheme ? JSON.parse(savedTheme) : true;
	});

	useEffect(() => {
		// localStorage.setItem('isDark', isDark);
		localStorage.setItem('isDark', JSON.stringify(isDark));

		const themeClass = isDark ? 'dark' : 'light';

		document.body.classList.remove('dark', 'light');
		document.body.classList.add(themeClass);
	}, [isDark]);

	return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>;
}

export { ThemeContext };
