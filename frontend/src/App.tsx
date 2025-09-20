// frontend/src/App.jsx
import { useEffect, useState } from 'react';

function App() {
	const [message, setMessage] = useState('');

	const apiTest = async () => {
		const result = await fetch('http://localhost:5000/api/hello');
		const response = await result.json();
		setMessage(response.message);
	};

	useEffect(() => {
		apiTest();
	}, []);

	return (
		<div>
			<h1>{message || 'Loading...'}</h1>
		</div>
	);
}

export default App;
