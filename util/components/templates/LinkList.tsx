import React from 'react';
import { BasePropsType } from '../types/prop_types';
import { Flex, Box, Button, Center } from '@chakra-ui/react';
import Link from 'next/link';
import MyImage from '../Image';

const LinkList = ({ template }: BasePropsType ) => {
	return (
		<Flex
			mb='15rem'
			flexDir={{ base: 'column', md: 'row' }}
		>
			{template.assetsIds.map(asset => {
				return <Box
					position='relative'
					width='fit-content'
					m='2rem'
				>
					<Flex
						justifyContent='center'
						alignItems='center'
					>
						<MyImage image={asset} maxW='200px' />
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
		</Flex>
	)
}

export default LinkList;