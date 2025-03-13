/** @format */

'use client';

import { ProjectData } from '@/types/project';
import { Badge } from '../ui/badge';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card';
import Image from 'next/image';

export function Solutions({
	projectData,
}: {
	projectData: ProjectData | null;
}) {
	const services = [
		{
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='h-6 w-6'>
					<path d='m18 16 4-4-4-4' />
					<path d='m6 8-4 4 4 4' />
					<path d='m14.5 4-5 16' />
				</svg>
			),
			title: 'Desenvolvimento Web Fullstack',
			description:
				'Criamos aplicações web completas, do front-end ao back-end, utilizando as tecnologias mais modernas do mercado como React, Next.js, Node.js e muito mais.',
		},
		{
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='h-6 w-6'>
					<path d='M17 6.1H3' />
					<path d='M21 12.1H3' />
					<path d='M15.1 18H3' />
					<path d='M19 6v12c0 1.1.9 2 2 2h.5' />
				</svg>
			),
			title: 'Integração com APIs',
			description:
				'Conectamos sistemas e plataformas através de APIs robustas e seguras, permitindo a troca de dados em tempo real e automatizando processos críticos para o seu negócio.',
		},
		{
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='h-6 w-6'>
					<rect
						width='18'
						height='18'
						x='3'
						y='3'
						rx='2'
					/>
					<path d='M3 9h18' />
					<path d='M9 21V9' />
				</svg>
			),
			title: 'Dashboards Interativos',
			description:
				'Desenvolvemos painéis de controle personalizados e interativos que transformam dados complexos em visualizações claras e acionáveis, facilitando a tomada de decisões.',
		},
	];

	return (
		<Card className='px-14 py-10 relative max-h-[680px] h-full '>
			<CardHeader>
				<Badge variant={'secondary'}>Especialidades</Badge>
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

				<CardTitle className='text-4xl font-bold tracking-tighter md:text-5xl/tight'>
					Nossas soluções tecnológicas
				</CardTitle>
				<CardDescription className='text-lg max-w-xl'>
					Desenvolvemos soluções personalizadas para atender às necessidades
					específicas do seu negócio
				</CardDescription>
			</CardHeader>

			<CardContent className='mt-10 flex min-h-80 w-full items-center justify-center gap-5'>
				<span className='opacity-10 text-9xl font-bold absolute z-50 top-2 right-2'>
					01
				</span>
				{services.map((service, index) => (
					<div
						key={index}
						className='group relative overflow-hidden rounded-xl border border-primary/20 bg-card  p-2 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 hover:border-primary/50 hover:emerald-glow h-88'>
						<div className='absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
						<div className='relative flex h-full flex-col justify-between p-6'>
							<div>
								<div className='flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/20'>
									{service.icon}
								</div>
								<h3 className='text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary'>
									{service.title}
								</h3>
								<p className='text-muted-foreground text-balance'>
									{service.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</CardContent>
		</Card>
	);
}
