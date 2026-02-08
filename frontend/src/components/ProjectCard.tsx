import { useEffect, useState } from 'react';
import type { ProjectInfo, WorkshopInfo } from '../types';
import { getWorkshopStats } from '../api/getWorkshopStats';
import { Eye, Github, HardDriveDownload, Star } from 'lucide-react';

const ProjectCard = ({ title, description, details, imgsrc }: ProjectInfo) => {
	const [steamStats, setSteamStats] = useState<WorkshopInfo | null>(null);

	useEffect(() => {
		const fetchDetails = async () => {
			if (details?.type === 'steam' && details?.steamIds) {
				const stats: WorkshopInfo = await getWorkshopStats(details.steamIds);
				setSteamStats(stats);
			}
		};

		fetchDetails();
	}, []);

	return (
		<div className='border rounded-lg p-3 bg-neutral-900 grid grid-cols-[35%_65%] grid-rows-[75%_25%] gap-y-2'>
			{/* Image */}
			<div className='shrink-0'>
				<img src={imgsrc} alt={title} className='w-50 h-35 object-cover rounded-md' />
			</div>

			{/* Title & Description */}
			<div>
				<h3 className='text-lg font-semibold'>{title}</h3>
				<p className='text-sm text-neutral-400 mt-1 mb-4'>{description}</p>
			</div>

			{/* GitHub icons — left */}
			{details?.githubUrls && (
				<div className='flex items-center gap-2'>
					{details.githubUrls.map((g) => (
						<button
							key={g.name}
							title={g.name}
							aria-label={`Open GitHub repo: ${g.name}`}
							onClick={() => window.open(g.url)}
							className='hover:scale-110 transition p-2!'
						>
							<Github className='w-4 h-4' />
						</button>
					))}
				</div>
			)}

			{/* Steam stats — right */}
			{steamStats ? (
				<div className='flex items-center gap-4 text-sm text-neutral-300 justify-self-end'>
					<div className='flex items-center gap-1' title='Favourites'>
						<Star className='w-4 h-4' />
						{steamStats.faves}
					</div>

					<div className='flex items-center gap-1' title='Subscribers'>
						<HardDriveDownload className='w-4 h-4' />
						{steamStats.subs}
					</div>

					<div className='flex items-center gap-1' title='Views'>
						<Eye className='w-4 h-4' />
						{steamStats.views}
					</div>
				</div>
			) : (
				<div>Loading stats...</div>
			)}
		</div>
	);
};

export default ProjectCard;
