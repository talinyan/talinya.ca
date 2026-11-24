import Section from './Section';

const jobs = [
	{
		role: 'Software Engineer',
		company: 'Safety Power Inc.',
		location: 'Mississauga, Ontario',
		dates: 'May 2024 – Present',
		description:
			'Build and scale data-heavy backend systems, modernize legacy code, and create tools that automate everyday work.'
	}
];

export default function Experience() {
	return (
		<Section id='experience' title='Experience'>
			<div className='space-y-6'>
				{jobs.map((job) => (
					<div key={job.role + job.company} className='rounded-xl border border-white/10 bg-white/2 p-6'>
						<div className='flex flex-wrap items-baseline justify-between gap-2 mb-2'>
							<h3 className='text-xl font-semibold text-white'>
								{job.role} <span className='text-primary'>@ {job.company}</span>
								<span className='text-lg ml-2'> ({job.location})</span>
							</h3>
							<span className='text-sm text-neutral-400'>{job.dates}</span>
						</div>

						<span>{job.description}</span>
					</div>
				))}
			</div>
		</Section>
	);
}
