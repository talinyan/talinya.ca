// import { FileUser } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const links = [
	{ href: '#about', label: 'About' },
	{ href: '#experience', label: 'Experience' },
	{ href: '#education', label: 'Education' },
	{ href: '#projects', label: 'Projects' }
];

export default function Header() {
	return (
		<header className='sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur'>
			<nav className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
				<a href='#landing' className='font-mono text-lg font-bold text-primary'>
					TB
				</a>

				<div className='flex items-center gap-4'>
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className='relative py-1 text-sm text-neutral-400 transition-colors hover:text-white
                         after:absolute after:-bottom-1 after:left-0 after:h-0.75 after:w-full
                         after:origin-left after:scale-x-0 after:rounded-full after:bg-primary
                         after:transition-transform after:duration-300 hover:after:scale-x-100'
						>
							{link.label}
						</a>
					))}

					{/* <a
						href='/resume.pdf'
						target='_blank'
						rel='noreferrer'
						className='flex items-center gap-2 rounded-md border border-primary px-3 py-1.5 text-sm
             font-medium text-primary transition-colors hover:bg-primary/10'
					>
						<FileUser className='size-4' />
						Resume
					</a> */}

					<a
						href='https://github.com/talinyan'
						target='_blank'
						rel='noreferrer'
						className='flex items-center gap-2 rounded-md border border-primary px-3 py-1.5 text-sm
                       font-medium text-primary transition-colors hover:bg-primary/10'
					>
						<FaGithub className='text-base' />
						GitHub
					</a>
				</div>
			</nav>
		</header>
	);
}
