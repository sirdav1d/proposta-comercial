/** @format */

import { ProjectData } from '@/types/project';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';
import logo from '../../../public/logo-emerald.png';

export default function Capa({
	projectData,
}: {
	projectData: ProjectData | null;
}) {
	return (
		<Card className='px-14 py-10 relative max-h-[680px] h-full'>
			<span className='dark:bg-zinc-50/20 bg-zinc-400/20 backdrop-blur-md z-10 h-full w-80 absolute top-0 right-0 rounded-tr-xl rounded-br-xl'></span>
			<CardHeader>
				<CardTitle className='flex items-center w-full justify-between text-primary'>
					<Image
						src={logo}
						alt={'logo synergia'}
						width={200}
						height={80}></Image>
					{projectData && projectData.avatarUrl ? (
						<>
							<Image
								src={projectData.avatarUrl}
								alt={'Logo do cliente'}
								width={60}
								height={60}
								className='z-50'></Image>
						</>
					) : (
						<p className='z-50'>logo do cliente</p>
					)}
				</CardTitle>
			</CardHeader>
			<CardContent className='flex min-h-80 mt-auto w-full items-center justify-end'>
				<span className='bg-primary shadow-xl shadow-emerald-300/20 h-64 w-64 rounded-full absolute mt-80 mr-16'></span>
				<span className='opacity-10 text-9xl font-bold absolute z-50 bottom-2 right-2'>
					00
				</span>
			</CardContent>
			<CardFooter className='flex h-full w-full mt-auto items-start gap-5 flex-col'>
				<Badge
					variant={'secondary'}
					className='font-semibold shadow-xl shadow-emerald-300/50'>
					Proposta Comercial
				</Badge>
				<h2 className='font-bold text-6xl'>
					{projectData && projectData.projectName
						? projectData.projectName
						: 'Proposta Comercial'}
				</h2>
				<p className='text-xl'>
					{projectData && projectData.clientName
						? projectData.clientName
						: 'nome do cliente'}
				</p>
			</CardFooter>
		</Card>
	);
}
