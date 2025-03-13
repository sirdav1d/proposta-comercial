/** @format */

'use client';
import { Badge } from '@/components/ui/badge';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import type { ProjectData } from '@/types/project';
import { Calendar, CheckCheck, CheckCircle, Clock } from 'lucide-react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card';
import Image from 'next/image';

interface TimelineSlideProps {
	projectData: ProjectData | null;
	isActive: boolean;
}

export function Cronograma({ projectData, isActive }: TimelineSlideProps) {
	if (!isActive) return null;

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
					<p className='z-20 text-nowrap text-primary absolute right-1/2 top-5 opacity-90'>
						logo do cliente
					</p>
				)}
				<Badge
					className='shadow-xl shadow-emerald-300/50'
					variant={'secondary'}>
					Cronograma
				</Badge>
				<CardTitle className='text-4xl font-bold tracking-tighter md:text-5xl/tight'>
					{projectData ? (
						<p>
							Cronograma para o projeto <br />
							{projectData.projectName}
						</p>
					) : (
						'Etapas de desenvolvimento'
					)}
				</CardTitle>
				<CardDescription className='text-lg max-w-xl'>
					Nosso processo de desenvolvimento é estruturado em etapas claras para
					garantir qualidade e transparência
				</CardDescription>
			</CardHeader>

			<CardContent className='mt-5'>
				<span className='opacity-10 text-9xl font-bold absolute z-50 bottom-2 right-2'>
					03
				</span>
				<Table className='w-full'>
					<TableHeader>
						<TableRow>
							<TableHead className='w-60'>Fase</TableHead>
							<TableHead className='w-60'>Período</TableHead>
							<TableHead>Atividades</TableHead>
							<TableHead className='w-60'>Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell className='font-medium'>
								<div className='flex items-center gap-2'>
									<Calendar className='h-5 w-5 text-primary' />
									Planejamento
								</div>
							</TableCell>
							<TableCell>
								<Badge variant={'outline'}>Semanas 1-2</Badge>
							</TableCell>
							<TableCell>
								<ul className='space-y-2'>
									<li className='flex items-start'>
										<CheckCircle className='h-4 w-4 text-primary mr-2 shrink-0 mt-0.5' />
										<span>Levantamento de requisitos</span>
									</li>
									<li className='flex items-start'>
										<CheckCircle className='h-4 w-4 text-primary mr-2 shrink-0 mt-0.5' />
										<span>Definição de escopo</span>
									</li>
									<li className='flex items-start'>
										<CheckCircle className='h-4 w-4 text-primary mr-2 shrink-0 mt-0.5' />
										<span>Wireframes e protótipos</span>
									</li>
								</ul>
							</TableCell>
							<TableCell>
								<Badge
									variant='outline'
									className='bg-primary/10 text-primary border-primary/30'>
									Documento de Requisitos
								</Badge>
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell className='font-medium'>
								<div className='flex items-center gap-2'>
									<Clock className='h-5 w-5 text-primary' />
									Desenvolvimento
								</div>
							</TableCell>
							<TableCell>
								<Badge variant={'outline'}>Semanas 3-8</Badge>
							</TableCell>
							<TableCell>
								<ul className='space-y-2'>
									<li className='flex items-start'>
										<CheckCircle className='h-4 w-4 text-primary mr-2 shrink-0 mt-0.5' />
										<span>Desenvolvimento de back-end</span>
									</li>
									<li className='flex items-start'>
										<CheckCircle className='h-4 w-4 text-primary mr-2 shrink-0 mt-0.5' />
										<span>Desenvolvimento de front-end</span>
									</li>
									<li className='flex items-start'>
										<CheckCircle className='h-4 w-4 text-primary mr-2 shrink-0 mt-0.5' />
										<span>Testes e QA</span>
									</li>
								</ul>
							</TableCell>
							<TableCell>
								<Badge
									variant='outline'
									className='bg-primary/10 text-primary border-primary/30'>
									Versão Beta
								</Badge>
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell className='font-medium'>
								<div className='flex items-center gap-2'>
									<CheckCheck className='h-5 w-5 text-primary mr-2 shrink-0 mt-0.5' />
									Entrega e Suporte
								</div>
							</TableCell>
							<TableCell>
								<Badge variant={'outline'}>Semanas 9-10</Badge>
							</TableCell>
							<TableCell>
								<ul className='space-y-2'>
									<li className='flex items-start'>
										<CheckCircle className='h-4 w-4 text-primary mr-2 shrink-0 mt-0.5' />
										<span>Implantação</span>
									</li>
									<li className='flex items-start'>
										<CheckCircle className='h-4 w-4 text-primary mr-2 shrink-0 mt-0.5' />
										<span>Treinamento</span>
									</li>
									<li className='flex items-start'>
										<CheckCircle className='h-4 w-4 text-primary mr-2 shrink-0 mt-0.5' />
										<span>Suporte contínuo</span>
									</li>
								</ul>
							</TableCell>
							<TableCell>
								<Badge
									variant='outline'
									className='bg-primary/10 text-primary border-primary/30'>
									Versão Final
								</Badge>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
