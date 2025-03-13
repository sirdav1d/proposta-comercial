/** @format */

'use client';

import { ModeToggle } from '@/components/mode-toogle';
import Capa from '@/components/slides/capa';
import { Contato } from '@/components/slides/contato';
import { Cronograma } from '@/components/slides/cronograma';
import { InvestmentSlide } from '@/components/slides/investimento';
import { PortfolioSlide } from '@/components/slides/portfolio';
import { Solutions } from '@/components/slides/solutions';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
import { ProjectData } from '@/types/project';

export default function Home() {
	const [projectData, setProjectData] = useState<ProjectData | null>(null);
	useEffect(() => {
		// Carregar dados do localStorage quando a página for carregada
		const savedData = localStorage.getItem('projectData');
		if (savedData) {
			try {
				setProjectData(JSON.parse(savedData));
			} catch (error) {
				console.error('Erro ao carregar dados do projeto:', error);
			}
		}

		// Adicionar event listeners para navegação com teclado
	}, []);

	const handleClearProject = () => {
		localStorage.removeItem('projectData');
		setProjectData(null);
	};

	return (
		<main className='flex bg-zinc-50 dark:bg-black items-center justify-center h-screen overflow-hidden p-20'>
			<ModeToggle />
			<Button
				asChild
				className='text-secondary font-semibold'>
				<Link
					href={'/register'}
					className='absolute top-5 right-20'>
					Cadastrar Novo
				</Link>
			</Button>
			<Button
				onClick={() => handleClearProject()}
				variant={'outline'}
				className=' font-semibold absolute top-5 right-60'>
				Resetar
			</Button>
			<Carousel className='w-full max-w-7xl '>
				<CarouselContent>
					<CarouselItem>
						<Capa projectData={projectData} />
					</CarouselItem>
					<CarouselItem>
						<Solutions projectData={projectData} />
					</CarouselItem>
					<CarouselItem>
						<PortfolioSlide projectData={projectData} />
					</CarouselItem>
					<CarouselItem>
						<Cronograma
							isActive={true}
							projectData={projectData}
						/>
					</CarouselItem>
					<CarouselItem>
						<InvestmentSlide
							isActive={true}
							projectData={projectData}
						/>
					</CarouselItem>
					<CarouselItem>
						<Contato
							isActive={true}
							projectData={projectData}
						/>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</main>
	);
}
