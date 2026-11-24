import Header from './Header';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Landing from './Landing';

function App() {
	return (
		<>
			<Header />
			<main>
				<Landing />
				<About />
				<Experience />
				<Education />
				<Projects />
			</main>
		</>
	);
}

export default App;
