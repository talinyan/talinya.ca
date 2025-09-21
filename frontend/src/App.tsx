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
		<div className='w-screen'>
			<div className='ml-auto mr-auto w-1/2 text-center'>
				<h1 className='text-red-500'>hiii</h1>
				<h2>wip :D</h2>

				<p className='text-orange-500'>{message || ''}</p>
			</div>
		</div>
	);
}

export default App;
