import Section from './Section';

export default function About() {
	return (
		<Section id='about' title='About Me'>
			<p className='max-w-4xl text-lg leading-relaxed text-neutral-300'>
				I'm a Software Engineer at Safety Power in Toronto. When I'm not at work, I'm usually tinkering with software,
				whether it be creating games and community content for games I love, fine-tuning my homelab & LLM, or various
				other areas I feel software could aid.
			</p>
		</Section>
	);
}
