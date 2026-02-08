import { Link } from 'react-router-dom';

export default function Header() {
	const linkClass = 'text-xl font-bold text-white visited:text-white! hover:text-black! mx-4';

	return (
		<div className='w-full bg-blue-500 text-white p-4 fixed top-0 left-0 shadow-md flex justify-center items-center'>
			<Link to='/' className={linkClass}>
				Home
			</Link>

			<Link to='/projects' className={linkClass}>
				Projects
			</Link>
		</div>
	);
}
