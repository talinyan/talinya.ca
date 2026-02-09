import OsuTracker from '../assets/osu-tracker.jpg';
import NapoleonMod from '../assets/napoleon-mod.png';
import type { ProjectInfo } from './types';

export const projects: ProjectInfo[] = [
	{
		id: 1,
		title: 'Video Game Mod Creation',
		description:
			'Created custom gameplay mods for Civilization VI and Rimworld. Developed through creating SQLite scripts and XML patches, producing unique and balanced mechanics.',
		image: NapoleonMod,
		details: {
			type: 'steam',
			steamIds: ['2953660261', '2956320499', '3236248669', '3291537692'],
			githubUrls: [
				{
					name: 'Civilization VI: Napoleon Mod',
					url: 'https://github.com/talinyan/Napoleon-Mod'
				},
				{
					name: 'Civilization VI: Constantine Mod',
					url: 'https://github.com/talinyan/Constantine-Mod'
				},
				{
					name: 'Rimworld: Genes Expanded Mod',
					url: 'https://github.com/talinyan/GenesExpanded'
				}
			]
		}
	},
	{
		id: 2,
		title: 'osu! User Metrics Tool',
		description:
			'Developed a user-friendly web application for tracking player metrics from the game osu!. Includes realtime updates of top osu! players, allowing users to easily track the performance of top players over time.',
		image: OsuTracker,
		details: {
			githubUrls: [
				{
					name: 'osu! Tracker GitHub',
					url: 'https://github.com/talinyan/osu-tracker'
				}
			]
		}
	}
];
