import { MapPin } from 'lucide-react';

export default function Landing() {
	return (
		<section id='landing' className='font-mono mx-auto max-w-7xl scroll-mt-20 px-6 py-24'>
			<p className='mb-3 text-sm text-primary'>hey, I'm</p>

			<h1 className='text-5xl font-extrabold tracking-tight text-white sm:text-7xl'>Trayden Boucher</h1>

			<p className='mt-3 text-2xl font-semibold text-neutral-400 sm:text-3xl'>Software Engineer</p>

			<p className='mt-3 flex items-center gap-2 text-sm text-muted'>
				<MapPin className='text-primary' />
				Toronto, ON
			</p>
		</section>
	);
}
