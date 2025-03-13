/** @format */

'use client';
import { Badge } from '@/components/ui/badge';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import type { ProjectData } from '@/types/project';
import { CreditCardIcon as CardIcon, Percent } from 'lucide-react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card';
import Image from 'next/image';

interface InvestmentSlideProps {
	projectData: ProjectData | null;
	isActive: boolean;
}

export function InvestmentSlide({
	projectData,
	isActive,
}: InvestmentSlideProps) {
	if (!isActive) return null;

	// Função para formatar valores monetários
	const formatCurrency = (value: number) => {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(value);
	};

	// Calcular valores com desconto
	const calculateDiscountedValue = (
		value: number,
		discountPercentage: number,
	) => {
		return value * (1 - discountPercentage / 100);
	};

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
				<Badge
					className='shadow-xl shadow-emerald-300/50'
					variant={'secondary'}>
					Investimento
				</Badge>
				<CardTitle className='text-3xl font-bold tracking-tighter md:text-5xl/tight'>
					{projectData ? (
						<h2>
							Investimento para o projeto <br /> {projectData.projectName}
						</h2>
					) : (
						'Formas de pagamento'
					)}
				</CardTitle>
				<CardDescription className='text-lg max-w-xl text-balance'>
					Oferecemos condições flexíveis para atender às necessidades do seu
					projeto
				</CardDescription>
			</CardHeader>
			<CardContent>
				<span className='opacity-10 text-9xl font-bold absolute z-50 top-2 right-2'>
					04
				</span>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className='w-60'>Forma de Pagamento</TableHead>
							<TableHead>Condições</TableHead>
							<TableHead className='w-60'>
								{projectData ? 'Valor' : 'Benefícios'}
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell className='font-medium'>
								<div className='flex items-center gap-2'>
									<Percent className='h-4 w-4 text-primary' />À vista
								</div>
							</TableCell>
							<TableCell>Pagamento integral no início do projeto</TableCell>
							<TableCell>
								{projectData ? (
									<div className='font-semibold space-y-2'>
										<p>
											{formatCurrency(
												calculateDiscountedValue(projectData.totalValue, 15),
											)}
										</p>
										<Badge
											variant='outline'
											className='bg-primary/10 text-primary border-primary/30'>
											15% de desconto
										</Badge>
									</div>
								) : (
									<Badge
										variant='outline'
										className='bg-primary/10 text-primary border-primary/30'>
										15% de desconto
									</Badge>
								)}
							</TableCell>
						</TableRow>
						<TableRow className='group hover:bg-muted/50 transition-colors'>
							<TableCell className='font-medium'>
								<div className='flex items-center gap-2'>
									<CardIcon className='h-4 w-4 text-primary' />
									Parcelado em 3x
								</div>
							</TableCell>
							<TableCell>
								Entrada + 2 parcelas durante o desenvolvimento
							</TableCell>
							<TableCell>
								{projectData ? (
									<div className='font-semibold space-y-2'>
										{formatCurrency(
											calculateDiscountedValue(projectData.totalValue, 10),
										)}
										<div className='text-sm text-muted-foreground mt-1'>
											3x de{' '}
											{formatCurrency(
												calculateDiscountedValue(projectData.totalValue, 10) /
													3,
											)}
										</div>
										<Badge
											variant='outline'
											className='bg-primary/10 text-primary border-primary/30'>
											10% de desconto
										</Badge>
									</div>
								) : (
									<Badge
										variant='outline'
										className='bg-primary/10 text-primary border-primary/30'>
										10% de desconto
									</Badge>
								)}
							</TableCell>
						</TableRow>
						<TableRow className='group hover:bg-muted/50 transition-colors'>
							<TableCell className='font-medium'>
								<div className='flex items-center gap-2'>
									<CardIcon className='h-4 w-4 text-primary' />
									Parcelado em 6x
								</div>
							</TableCell>
							<TableCell>Entrada + 5 parcelas mensais</TableCell>
							<TableCell>
								{projectData ? (
									<div className='font-semibold space-y-2'>
										{formatCurrency(
											calculateDiscountedValue(projectData.totalValue, 5),
										)}
										<div className='text-sm text-muted-foreground mt-1'>
											6x de{' '}
											{formatCurrency(
												calculateDiscountedValue(projectData.totalValue, 5) / 6,
											)}
										</div>
										<Badge
											variant='outline'
											className='bg-primary/10 text-primary border-primary/30'>
											5% de desconto
										</Badge>
									</div>
								) : (
									<Badge
										variant='outline'
										className='bg-primary/10 text-primary border-primary/30'>
										5% de desconto
									</Badge>
								)}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className='font-medium '>
								<div className='flex items-center gap-2'>
									<CardIcon className='h-4 w-4 text-primary' />
									Parcelado em 12x
								</div>
							</TableCell>
							<TableCell>Entrada + 11 parcelas mensais</TableCell>
							<TableCell>
								{projectData ? (
									<div className='font-semibold space-y-2'>
										{formatCurrency(
											calculateDiscountedValue(projectData.totalValue, 0),
										)}
										<div className='text-sm text-muted-foreground mt-1'>
											12x de{' '}
											{formatCurrency(
												calculateDiscountedValue(projectData.totalValue, 0) /
													12,
											)}
										</div>
										<Badge
											variant='outline'
											className='bg-primary/10 text-primary border-primary/30'>
											Valor Total
										</Badge>
									</div>
								) : (
									<Badge
										variant='outline'
										className='bg-primary/10 text-primary border-primary/30'>
										Valor Total
									</Badge>
								)}
							</TableCell>
						</TableRow>
					</TableBody>
					<TableCaption className='py-5'>
						Aceitamos pagamentos via PIX, transferência bancária, boleto e
						cartão de crédito.
					</TableCaption>
				</Table>
			</CardContent>
		</Card>
	);
}
