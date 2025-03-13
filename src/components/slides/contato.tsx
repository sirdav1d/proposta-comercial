/** @format */

'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import type { ProjectData } from '@/types/project';
import { Mail, MessageSquare } from 'lucide-react';
import { Badge } from '../ui/badge';
import Image from 'next/image';

interface ContactSlideProps {
	projectData: ProjectData | null;
	isActive: boolean;
}

export function Contato({ projectData, isActive }: ContactSlideProps) {
	if (!isActive) return null;

	return (
		<Card className='px-14 py-10 relative max-h-[680px] h-full '>
			<CardHeader className='space-y-2 max-w-3xl'>
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
				<Badge
					className='shadow-xl shadow-emerald-300/50'
					variant={'secondary'}>
					Contato
				</Badge>
				<CardTitle className='text-4xl  font-bold tracking-tighter md:text-5xl/tight'>
					{projectData
						? `Vamos avançar com o projeto ${projectData.projectName}?`
						: 'Vamos conversar?'}
				</CardTitle>
				<CardDescription className='text-lg'>
					Estamos prontos para transformar suas ideias em soluções digitais de
					alto impacto. Entre em contato conosco para discutir seu projeto e
					receber uma proposta personalizada.
				</CardDescription>
			</CardHeader>

			<CardContent className='flex mt-20 items-center justify-center gap-5'>
				<span className='opacity-10 text-9xl font-bold absolute z-50 top-2 right-2'>
					05
				</span>
				<Card className='overflow-hidden transform transition-all duration-500 hover:shadow-lg hover:-translate-y-2 bg-card border border-primary/20 hover:emerald-glow '>
					<CardHeader className='pb-2'>
						<CardTitle className='flex items-center gap-2'>
							<MessageSquare className='h-6 w-6 text-primary' />
							WhatsApp
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className='text-muted-foreground mb-6'>
							Converse diretamente com nossa equipe e receba atendimento em
							horário comercial.
						</p>
						<Button
							variant={'default'}
							className='w-full text-secondary font-semibold transition-all ease-in-out duration-200'
							size='lg'>
							Falar no WhatsApp
						</Button>
					</CardContent>
				</Card>

				<Card className='overflow-hidden transform transition-all duration-500 hover:shadow-lg hover:-translate-y-2 bg-card border border-primary/20 hover:emerald-glow '>
					<CardHeader className='pb-2'>
						<CardTitle className='flex items-center gap-2'>
							<Mail className='h-6 w-6 text-primary' />
							E-mail
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className='text-muted-foreground mb-6'>
							Envie-nos um e-mail detalhando seu projeto e responderemos em até
							24 horas.
						</p>
						<Button
							variant={'outline'}
							className='w-full   transition-all ease-in-out duration-200'
							size='lg'>
							Enviar E-mail
						</Button>
					</CardContent>
				</Card>
			</CardContent>
		</Card>
	);
}
