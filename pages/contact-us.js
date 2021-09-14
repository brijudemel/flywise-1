import { Box, Button, Center, Grid, GridItem, Heading, Image, Input, Link, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import Footer from './common/footerr';
import Navbar from './common/navbar';

function ContactUS() {
	return (
		<Box overflowX="hidden">
			<title>Flywise - Contact us</title>
			<Navbar outline="Contact US" />
			<Grid overflow="hidden" maxW="100vw" templateRows="repeat(12, 1fr)" templateColumns="repeat(12, 1fr)">
				<GridItem
					zIndex="1"
					py={[ '2rem', '1rem', '2rem', '3rem', '10rem' ]}
					pl={[ '0.4rem', '1rem', '3rem', '6rem', '3rem' ]}
					pr={[ '0.4rem', '1rem', '1rem', '2rem', '3rem' ]}
					rowSpan={12}
					colSpan={[ 12, 12, 6, 6, 6 ]}
					// bg={bg}
				>
					<Heading color="rgba(156, 156, 156, 1)" my="4" textAlign={{base:"center",sm:"left"}} fontSize={[ 'lg', 'xl', '2xl', '3xl', '4xl' ]}>
						CONTACT US
					</Heading>
					<Heading my="8" textAlign={{base:"center",sm:"left"}} fontSize={[ 'xl', '2xl', '3xl', '4xl', '5xl' ]} color="#0DB3FB">
						{`We've got answers if you've got questions!`}
					</Heading>
					<Heading  textAlign={{base:"center",sm:"left"}} fontWeight="500" my="8" fontSize={[ 'md', 'lg', 'xl', '2xl', '3xl' ]}>
						{`Send us your thoughts, questions, compliments, or resume-related haikus! We'd love to hear from you`}
					</Heading>
{/*<Link>
						<Button
							variant={'solid'}
							size={'lg'}
							color="white"
							fontWeight="semibold"
							boxShadow="base"
							px="10"
							py="8"
							bg="rgba(13, 179, 251, 1)"
							_hover={{
								bg: 'rgba(9, 124, 174, 1)'
							}}
							_focus={{
								bg: 'rgba(13, 179, 251, 1)'
							}}
							_active={{
								bg: 'rgba(13, 179, 251, 1)'
							}}
							mt="8"
							rounded="16px"
						>
							<Heading fontSize="2xl" fontWeight="500">
								Contact Us
							</Heading>
						</Button>
						</Link>*/}
				</GridItem>
				{/*<GridItem
					zIndex="1"
					pr={[ '0.4rem', '1rem', '3rem', '6rem', '12rem' ]}
					rowSpan={12}
					colSpan={[ 12, 12, 5, 5, 5 ]}
				>
					<Image mt="16" src="/images/contact_us.png" alt="main" />
				</GridItem>*/}
				<GridItem
					// pr={[ '0.4rem', '1rem', '3rem', '6rem', '8rem' ]}
					rowSpan={12}
					marginTop={{base:"20px",sm:"0"}}
					colSpan={[ 12, 12, 6, 6, 6 ]}
					bg="linear-gradient(180deg, rgba(230, 246, 255, 0.6) 41.47%, rgba(255, 255, 255, 0) 100%)"
					py={[ '1rem', '1rem', '2rem', '3rem', '10rem' ]}
					px="10"
					zIndex="0"
					transform="translate(0,-3rem)"
					
				>
					<Heading textAlign="center" color="rgba(156, 156, 156, 1)" fontSize="xl">
						Want more information?
					</Heading>
					<Heading fontSize={{base:"22px",sm:"40px"}}  my={{base:"4",sm:"8"}} textAlign="center">
						Ask us your questions or schedule a meeting
					</Heading>
					<Center>
						<Box w={[ '18rem', '22rem', '36rem', '44rem', '50rem' ]}>
							<Text mt="8" mb="2">
								Your name
							</Text>
							<Input
								bg="whiteAlpha.900"
								borderColor="blackAlpha.500"
								_hover={{ borderColor: 'blackAlpha.800' }}
								focusBorderColor="black"
								placeholder="Your name"
							/>
							<Text mt="8" mb="2">
								Your Email
							</Text>
							<Input
								bg="whiteAlpha.900"
								borderColor="blackAlpha.500"
								_hover={{ borderColor: 'blackAlpha.800' }}
								focusBorderColor="black"
								placeholder="someone@email.com"
							/>
							<Text mt="8" mb="2">
								Your Number
							</Text>
							<Input
								bg="whiteAlpha.900"
								borderColor="blackAlpha.500"
								_hover={{ borderColor: 'blackAlpha.800' }}
								focusBorderColor="black"
								placeholder="Your number"
							/>
							<Text mt="8" mb="2">
								Your message
							</Text>
							{/* < placeholder="Here is a sample placeholder" /> */}
							<Textarea
								bg="whiteAlpha.900"
								borderColor="blackAlpha.500"
								_hover={{ borderColor: 'blackAlpha.800' }}
								resize={'vertical'}
								focusBorderColor="black"
								placeholder="Type your message......"
							/>
						</Box>
					</Center>
					<Center>
						<Button
							variant={'solid'}
							size={'md'}
							color="white"
							fontWeight="semibold"
							px="6"
							id="gradient"
							colorScheme="blue"
							my="19"
							rounded="full"
						>
							Send request
						</Button>
					</Center>
				</GridItem>
				
			</Grid>
			<Footer />
		</Box>
	);
}

export default ContactUS;
