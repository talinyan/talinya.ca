// ProjectCard.jsx
import { projects } from '../projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
	return (
		<div className='w-3/4 ml-auto mr-auto p-4 gap-12 grid grid-cols-1 lg:grid-cols-2 text-center'>
			{projects.map((p) => (
				<ProjectCard key={p.id} {...p} />
			))}
		</div>
	);
};

export default Projects;
