import { FC } from 'react'

interface IThemeElementProps {
	currentTheme: string
	theme: string

	onClick(): void
}

const ThemeElement: FC<IThemeElementProps> = ({
	currentTheme,
	theme,
	onClick,
}) => {
	console.log('ThemeElement Render')

	return (
		<div
			className={`border-base-content/20 hover:border-base-content/40 overflow-hidden 
        rounded-lg border outline outline-2 outline-offset-2 ${
					currentTheme == theme
						? '!outline-base-content'
						: 'outline-transparent'
				}`}
			onClick={onClick}
		>
			<div
				data-theme={theme}
				className='bg-base-100 text-base-content w-full cursor-pointer font-sans'
			>
				<div className='grid grid-cols-5 grid-rows-3'>
					<div className='bg-base-200 col-start-1 row-span-2 row-start-1'></div>
					<div className='bg-base-300 col-start-1 row-start-3'></div>
					<div className='bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2'>
						<div className='font-bold'>{theme} </div>
						<div className='flex flex-wrap gap-1'>
							<div className='bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6'>
								<div className='text-primary-content text-sm font-bold'>A</div>
							</div>
							<div className='bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6'>
								<div className='text-secondary-content text-sm font-bold'>
									A
								</div>
							</div>
							<div className='bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6'>
								<div className='text-accent-content text-sm font-bold'>A</div>
							</div>
							<div className='bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6'>
								<div className='text-neutral-content text-sm font-bold'>A</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ThemeElement
