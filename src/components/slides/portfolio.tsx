/** @format */

'use client';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card';
import { ProjectData } from '@/types/project';

export function PortfolioSlide({
	projectData,
}: {
	projectData: ProjectData | null;
}) {
	const projects = [
		{
			image:
				'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
			title: 'Fashionista',
			category: 'E-commerce',
			description:
				'Plataforma completa de e-commerce para uma marca de moda, com sistema de pagamento integrado e gestão de estoque.',
			technologies: ['React', 'Node.js'],
			url: 'https://fashionista-example.com',
		},
		{
			image:
				'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
			title: 'FinTech Analytics',
			category: 'Dashboard',
			description:
				'Dashboard interativo para análise financeira com visualizações de dados em tempo real e relatórios personalizados.',
			technologies: ['Vue.js', 'Python'],
			url: 'https://fintech-analytics-example.com',
		},
		{
			image:
				'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
			title: 'HealthTrack',
			category: 'Aplicativo',
			description:
				'Aplicativo de monitoramento de saúde com integração a dispositivos wearables e recomendações personalizadas.',
			technologies: ['React Native', 'Firebase'],
			url: 'https://healthtrack-example.com',
		},
	];

	return (
		<Card className='px-14 py-10 relative max-h-[680px] h-full '>
			<CardHeader>
				{projectData && projectData.avatarUrl ? (
					<>
						<Image
							src={projectData.avatarUrl}
							alt={'Logo do cliente'}
							width={60}
							height={60}
							className='z-50 dark:invert text-primary absolute right-1/2 top-5 opacity-90'></Image>
					</>
				) : (
					<p className='z-20 text-nowrap size-8 text-primary absolute right-1/2 top-5 opacity-90'>
						logo do cliente
					</p>
				)}
				<Badge variant={'secondary'}>Portfólio</Badge>
				<CardTitle className='text-4xl font-bold tracking-tighter md:text-5xl/tight'>
					Projetos de Sucesso
				</CardTitle>

				<CardDescription className='text-lg max-w-xl'>
					Conheça alguns dos projetos que desenvolvemos e como ajudamos nossos
					clientes a alcançarem seus objetivos
				</CardDescription>
			</CardHeader>

			<CardContent className='grid grid-cols-1 mt-5 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
				<span className='opacity-10 text-9xl font-bold absolute z-50 top-2 right-2'>
					02
				</span>
				{projects.map((project, index) => (
					<div
						key={index}
						className='group relative overflow-hidden rounded-xl border border-primary/20 bg-card  shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:emerald-glow'>
						<div className='aspect-video w-full overflow-hidden rounded-t-lg'>
							<Image
								width={280}
								height={280}
								src={project.image || '/placeholder.svg'}
								alt={project.title}
								className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
							/>
						</div>
						<div className='p-6'>
							<div className='flex items-center justify-between mb-4'>
								<h3 className='text-xl font-bold'>{project.title}</h3>
								<div className='flex gap-1'>
									<Badge
										variant='outline'
										className='bg-primary/10 text-primary border-primary/30'>
										{project.category}
									</Badge>
								</div>
							</div>
							<p className='text-muted-foreground text-sm mb-4'>
								{project.description}
							</p>
							<div className='flex items-center justify-between'>
								<div className='flex gap-2'>
									{project.technologies.map((tech, i) => (
										<Badge
											key={i}
											variant='secondary'>
											{tech}
										</Badge>
									))}
								</div>
								<a
									href={project.url}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center text-sm font-medium text-primary'>
									Visitar site
									<ArrowRight className='ml-1 h-4 w-4' />
								</a>
							</div>
						</div>
					</div>
				))}
			</CardContent>
		</Card>
	);
}
