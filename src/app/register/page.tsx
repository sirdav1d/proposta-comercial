/** @format */

'use client';

import type React from 'react';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import type { ProjectData } from '@/types/project';

export default function CadastroPage() {
	const router = useRouter();
	const [formData, setFormData] = useState<ProjectData>({
		avatarUrl: '',
		clientName: '',
		projectName: '',
		totalValue: 0,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		setFormData((prev: any) => ({
			...prev,
			[name]: name === 'totalValue' ? Number.parseFloat(value) || 0 : value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Salvar no localStorage
		localStorage.setItem('projectData', JSON.stringify(formData));

		// Redirecionar para a página inicial
		router.push('/');
	};

	return (
		<div className='flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-primary/5'>
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.2),transparent_40%)]'></div>

			<header className='sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
				<div className='container flex h-16 items-center justify-between'>
					<div className='flex items-center gap-2 font-bold'>
						<Layers className='h-6 w-6 text-primary' />
						<span className='emerald-gradient-text'>TechSphere</span>
					</div>
					<nav className='hidden md:flex gap-6'>
						<Link
							href='/'
							className='text-sm font-medium transition-colors hover:text-primary'>
							Início
						</Link>
						<Link
							href='/#servicos'
							className='text-sm font-medium transition-colors hover:text-primary'>
							Serviços
						</Link>
						<Link
							href='/#portfolio'
							className='text-sm font-medium transition-colors hover:text-primary'>
							Projetos
						</Link>
						<Link
							href='/#contato'
							className='text-sm font-medium transition-colors hover:text-primary'>
							Contato
						</Link>
					</nav>
				</div>
			</header>

			<main className='flex-1 container py-12 relative z-10'>
				<div className='max-w-3xl mx-auto'>
					<Link
						href='/'
						className='inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8'>
						<ArrowLeft className='mr-2 h-4 w-4' />
						Voltar para a página inicial
					</Link>

					<div>
						<Card className='border-primary/20 shadow-lg bg-card/90 backdrop-blur-sm hover:emerald-glow transition-all duration-500'>
							<CardHeader className='space-y-1'>
								<CardTitle className='text-2xl font-bold'>
									Cadastro de Projeto
								</CardTitle>
								<CardDescription>
									Preencha os dados do cliente e do projeto para personalizar a
									proposta comercial.
								</CardDescription>
							</CardHeader>

							<form onSubmit={handleSubmit}>
								<CardContent className='space-y-4'>
									<div className='space-y-2'>
										<Label htmlFor='clientName'>Nome do Cliente</Label>
										<Input
											id='clientName'
											name='clientName'
											placeholder='Nome completo do cliente ou empresa'
											value={formData.clientName}
											onChange={handleChange}
											required
											className='bg-secondary/50 backdrop-blur-sm border-primary/20'
										/>
									</div>

									<div className='space-y-2'>
										<Label htmlFor='projectName'>Nome do Projeto</Label>
										<Input
											id='projectName'
											name='projectName'
											placeholder='Nome do projeto'
											value={formData.projectName}
											onChange={handleChange}
											required
											className='bg-secondary/50 backdrop-blur-sm border-primary/20'
										/>
									</div>

									<div className='space-y-2'>
										<Label htmlFor='totalValue'>Valor Total (R$)</Label>
										<Input
											id='totalValue'
											name='totalValue'
											type='number'
											min='0'
											step='0.01'
											placeholder='0.00'
											value={formData.totalValue || ''}
											onChange={handleChange}
											required
											className='bg-secondary/50 backdrop-blur-sm border-primary/20'
										/>
										<p className='text-sm text-muted-foreground'>
											Este valor será usado para calcular as opções de
											pagamento.
										</p>
									</div>

									<div className='space-y-2'>
										<Label htmlFor='avatarUrl'>URL da Imagem (opcional)</Label>
										<Input
											id='avatarUrl'
											name='avatarUrl'
											type='url'
											placeholder='https://exemplo.com/imagem.jpg'
											value={formData.avatarUrl}
											onChange={handleChange}
											className='bg-secondary/50 backdrop-blur-sm border-primary/20'
										/>
										<p className='text-sm text-muted-foreground'>
											URL de uma imagem que represente o cliente ou projeto.
										</p>
									</div>
								</CardContent>

								<CardFooter className='flex justify-between'>
									<Button
										variant='outline'
										type='button'
										onClick={() => router.push('/')}>
										Cancelar
									</Button>
									<Button
										type='submit'
										className='gap-2 bg-primary hover:bg-primary/90 emerald-glow'>
										<Save className='h-4 w-4' />
										Salvar e Gerar Proposta
									</Button>
								</CardFooter>
							</form>
						</Card>
					</div>
				</div>
			</main>

			<footer className='border-t border-primary/20 py-6 bg-background/50 backdrop-blur-sm'>
				<div className='container flex flex-col sm:flex-row justify-between items-center'>
					<div className='flex items-center gap-2 font-bold'>
						<Layers className='h-5 w-5 text-primary' />
						<span className='emerald-gradient-text'>TechSphere</span>
					</div>
					<p className='text-xs text-muted-foreground mt-2 sm:mt-0'>
						&copy; {new Date().getFullYear()} TechSphere. Todos os direitos
						reservados.
					</p>
				</div>
			</footer>
		</div>
	);
}
