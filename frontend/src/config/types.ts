export type ProjectInfo = {
	id: number;
	title: string;
	description: string;
	image: string;

	/** Extra details to include & handle in ProjectCard */
	details?: {
		type?: string;
		steamIds?: string[];
		githubUrls?: {
			name: string;
			url: string;
		}[];
	};
};

export type WorkshopInfo = {
	faves: number;
	subs: number;
	views: number;
};
