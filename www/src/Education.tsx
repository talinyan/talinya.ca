import { GraduationCap } from 'lucide-react';
import Section from './Section';

export default function Education() {
	return (
		<Section id='education' title='Education'>
			<div className='rounded-xl border border-white/10 bg-white/2 p-6'>
				<div className='flex flex-wrap items-center justify-between gap-2'>
					<div className='flex items-center gap-2'>
						<GraduationCap className='size-6 shrink-0 text-primary' />
						<h3 className='text-xl font-semibold text-white'>Queen's University at Kingston (Ontario, Canada)</h3>
					</div>
					<span className='text-sm text-neutral-400'>2021 – 2026</span>
				</div>

				<div className='mt-1 flex items-baseline gap-1'>
					<p className=' text-primary'>Honours Bachelor of Computing</p>
					<p className='text-sm'>(Professional Internship with Distinction)</p>
				</div>
			</div>
		</Section>
	);
}
