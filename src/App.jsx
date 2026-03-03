import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Projects from './pages/Projects';
import Project from './pages/Project';
import PageNotFound from './pages/PageNotFound';
import ScrollToTop from './components/ScrollToTOp';

function App() {
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />

				<Header />

				<Routes>
					<Route path="*" element={<PageNotFound />} />
					<Route path="/" element={<Home />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/project/:id" element={<Project />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
