import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Star, HardDriveDownload, Eye, Image, Link } from 'lucide-react';
import Section from './Section';

const API = import.meta.env.DEV ? '/api' : 'https://api.talinya.ca';

type SteamStats = {
	total: { faves: number; subs: number; views: number };
	items: { id: string; title: string; faves: number; subs: number; views: number }[];
};

const projects = [
	{
		name: 'Traindle',
		description: `A Wordle-style daily puzzle where you guess a train system, with hints based on its stations, lines, and network.
      A C# ETL pipeline pulls in the open-source citylines.co dataset, filters out the noise that comes with community-contributed data,
      and saves 900+ clean train systems and 3,900+ lines, 450+ systems and 1,800+ lines of which are playable.`,
		tech: ['C#', 'ASP.NET Core', 'EF Core', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'Tailwind'],
		link: 'https://traindle.talinya.ca',
		githubLink: 'https://github.com/talinyan/traindle',
		image: 'traindle.jpg'
	},
	{
		name: 'Shortlisted',
		description: `Scores how well a resume fits a job posting.
      A self-hosted Qwen3.6-35B model running on llama.cpp extracts structured data from both documents using JSON schema-constrained output.
      A deterministic, explainable algorithm then computes the score, so the same data always gets the same result, and the LLM summarizes the candidate's strengths and gaps.`,
		tech: ['React', 'TypeScript', 'Node.js', 'Fastify', 'llama.cpp', 'Docker', 'Tailwind'],
		link: 'https://shortlisted.talinya.ca',
		githubLink: 'https://github.com/talinyan/shortlisted',
		image: 'shortlisted.png'
	},
	{
		name: 'Gameplay Mod Creation',
		description: `Custom gameplay mods for Civilization VI and RimWorld, including new Civ VI leaders.
      Built with SQLite scripts and XML patches that change core game data, designed to keep mechanics balanced
      and stay compatible with other popular mods through major game updates.`,
		tech: ['XML', 'SQL', 'SQLite'],
		link: 'https://steamcommunity.com/id/talinya/myworkshopfiles/',
		githubLink: 'https://github.com/talinyan/Napoleon-Mod',
		steamIds: ['2953660261', '2956320499', '3236248669', '3291537692'],
		image: 'game_mods.png'
	},
	{
		name: 'talinya.ca',
		description: `This website! Breaking the fourth wall here...`,
		tech: ['React', 'Node.js', 'Fastify', 'TypeScript', 'Docker', 'Tailwind'],
		githubLink: 'https://github.com/talinyan/talinya.ca'
	}
];

const getWorkshopStats = async (ids: string[]): Promise<SteamStats> => {
	const res = await fetch(`${API}/workshop-stats`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ ids })
	});
	if (!res.ok) throw new Error(`Stats request failed: ${res.status}`);
	return res.json();
};

export default function Projects() {
	const [steamStats, setSteamStats] = useState<SteamStats | null>(null);

	useEffect(() => {
		const ids = projects.flatMap((p) => p.steamIds ?? []);
		getWorkshopStats(ids).then(setSteamStats).catch(console.error);
	}, []);

	return (
		<Section id='projects' title='Projects'>
			<div className='grid gap-8 sm:grid-cols-2'>
				{projects.map((p) => (
					<div
						key={p.name}
						className='flex flex-col rounded-l border border-white/10 bg-white/2 p-6 transition-colors hover:border-primary'
					>
						<div className='flex justify-between items-center'>
							<h3 className='text-xl font-semibold text-white'>{p.name}</h3>

							<div className='flex items-center gap-3'>
								{p.image && (
									<a href={p.image} target='_blank' rel='noreferrer' className='text-primary'>
										<Image className='size-6' />
									</a>
								)}

								{p.link && (
									<a href={p.link} target='_blank' rel='noreferrer' className='text-primary'>
										<Link className='size-6'></Link>
									</a>
								)}

								{p.githubLink && (
									<a href={p.githubLink} target='_blank' rel='noreferrer' className='text-primary'>
										<FaGithub className='size-6' />
									</a>
								)}
							</div>
						</div>

						<p className='mt-2 mb-4 text-neutral-300'>{p.description}</p>

						<div className='mt-auto flex flex-wrap items-center justify-between gap-2'>
							<div className='flex flex-wrap items-center gap-1'>
								{p.tech.map((t) => (
									<span key={t} className='rounded-sm bg-primary/10 px-2.5 py-1 text-xs text-primary'>
										{t}
									</span>
								))}
							</div>

							{p.steamIds && steamStats && (
								<div className='flex items-center gap-3 text-sm text-neutral-300'>
									<p>Stats:</p>

									<div className='flex items-center gap-1' title='Favourites'>
										<Star className='size-4' />
										{steamStats.total.faves.toLocaleString()}
									</div>

									<div className='flex items-center gap-1' title='Subscribers'>
										<HardDriveDownload className='size-4' />
										{steamStats.total.subs.toLocaleString()}
									</div>

									<div className='flex items-center gap-1' title='Views'>
										<Eye className='size-4' />
										{steamStats.total.views.toLocaleString()}
									</div>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</Section>
	);
}
