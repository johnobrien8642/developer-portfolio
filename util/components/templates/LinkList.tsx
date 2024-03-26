import React from 'react';
import { BasePropsType } from '../types/prop_types';
import { Flex, Box, Button, Center } from '@chakra-ui/react';
import Link from 'next/link';
import MyImage from '../Image';

const LinkList = ({ template }: BasePropsType ) => {
	return (
		<Center
			my='2rem'
			flexDir={{ base: 'column', md: 'row' }}
		>
			{template.assetsIds.map(asset => {
				return <Box
					position='relative'
					width='fit-content'
					my='2rem'
				>
					<Flex
						justifyContent='center'
						alignItems='center'
						width='75%'
					>
						<MyImage image={asset} />
						<Box
							ml='2rem'
						>
							<Link
								href={asset.extLink ?? ''}
							>
								<Button>
									{asset.extLinkText}
								</Button>
							</Link>
						</Box>
					</Flex>
					<Box 
						position='absolute' 
						width='20%' 
						borderBottom='1px solid white'
						top='115%'
					/>
				</Box>
			})}
		</Center>
	)
}

export default LinkList;