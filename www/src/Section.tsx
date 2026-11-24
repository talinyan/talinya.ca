import type { ReactNode } from 'react';

type SectionProps = {
	id: string;
	title: string;
	children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
	return (
		<section id={id} className='mx-auto max-w-7xl scroll-mt-20 px-6 py-8'>
			<h2 className='mb-8 flex items-center gap-4 text-3xl font-bold text-white'>
				{title}
				<span className='h-px flex-1 bg-white/10' />
			</h2>
			{children}
		</section>
	);
}
