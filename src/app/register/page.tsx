/** @format */

'use client';

import type React from 'react';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Save } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { ModeToggle } from '@/components/mode-toogle';
import type { ProjectData } from '@/types/project';
import Link from 'next/link';

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
		<main className='flex items-center justify-center h-full md:h-screen w-full  relative z-10 px-4 pb-10'>
			<ModeToggle />
			<Button
				asChild
				className='text-secondary font-semibold'>
				<Link
					href={'/'}
					className='absolute top-5 right-20'>
					Voltar
				</Link>
			</Button>
			{/* <ChefHat className='z-20 size-8 text-primary absolute left-5 xl:left-1/2 top-5 xl:top-20 opacity-50' /> */}
			<Card className='border-primary/20  mt-28 xl:mt-0'>
				<CardHeader className='space-y-1'>
					<CardTitle className='text-2xl font-bold'>
						Cadastro de Projeto
					</CardTitle>
					<CardDescription>
						Preencha os dados do cliente e do projeto para personalizar a
						proposta comercial.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={handleSubmit}
						className='space-y-5'>
						<div className='space-y-2.5'>
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

						<div className='space-y-2.5'>
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

						<div className='space-y-2.5'>
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
								Este valor será usado para calcular as opções de pagamento.
							</p>
						</div>

						<div className='space-y-2.5'>
							<Label htmlFor='avatarUrl'>URL da Logo (opcional)</Label>
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

						<div className='flex gap-5 justify-end mt-10'>
							<Button
								variant='outline'
								type='button'
								onClick={() => router.push('/')}>
								Cancelar
							</Button>
							<Button
								type='submit'
								className='text-secondary'>
								<Save className='h-4 w-4' />
								Salvar e Gerar Proposta
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</main>
	);
}
