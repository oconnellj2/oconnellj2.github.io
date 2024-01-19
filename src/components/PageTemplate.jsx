import React, {useEffect, useState} from 'react';

import {
	ActionIcon,
	Container,
	Group,
	Space,
	Text,
	Title,
	rem,
	useMantineColorScheme,
	useComputedColorScheme,
	HoverCard
} from '@mantine/core';
import {IconCode, IconSun, IconBrandLinkedin, IconBrandGithub, IconFileText, IconMoonStars} from '@tabler/icons-react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Typist from 'react-typist-component';

import style from '../css/PageTemplate.module.css';

const PageTemplate = ({children}) => {
	const languages = [
		'Hello',
		'Bonjour',
		'Hola',
		'안녕하세요',
		'こんにちは',
		'Вітаю',
		'Привет',
		'Cześć',
		'שלום',
		'مرحبا'
	];
	const [greeting, setGreeting] = useState('');

	useEffect(() => {
		const getRandomGreeting = () => languages[Math.floor(Math.random() * languages.length)];
		setGreeting(getRandomGreeting());
		const intervalId = setInterval(() => {
			setGreeting(getRandomGreeting());
		}, 5000);
		return () => clearInterval(intervalId);
	}, []);

	const {setColorScheme} = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme('dark', {
		getInitialValueInEffect: true
	});
	return (
		<>
			<header className={style.header}>
				<Container my="md" className={style.innerHeader}>
					<Link className={style.page} to="/">
						{greeting && <Typist><Title>{greeting}</Title></Typist>}
					</Link>
					<Group gap={5} wrap="nowrap">
						<Link className={style.page} to="arrakis">
							<ActionIcon href="https://github.com/oconnellj2/oconnellj2.github.io" color="gray" variant="transparent">
								Arrakis
							</ActionIcon>
						</Link>
						<HoverCard>
							<HoverCard.Target>
								<ActionIcon
									component="a"
									href={require('../assets/resume.pdf')}
									rel="noopener noreferrer nofollow"
									target="_blank"
									color="red"
									variant="subtle"
								>
									<IconFileText stroke={1} />
								</ActionIcon>
							</HoverCard.Target>
							<HoverCard.Dropdown style={{'': 0}}>
								<Text c="dimmed" size="xs">
									résumé
								</Text>
							</HoverCard.Dropdown>
						</HoverCard>
						<ActionIcon
							component="a"
							href="https://www.linkedin.com/in/oconnellj2"
							rel="noopener noreferrer nofollow"
							target="_blank"
							variant="subtle"
						>
							<IconBrandLinkedin stroke={1} />
						</ActionIcon>
						<ActionIcon
							component="a"
							href="https://github.com/oconnellj2"
							rel="noopener noreferrer nofollow"
							target="_blank"
							color="grey"
							variant="subtle"
						>
							<IconBrandGithub stroke={1} />
						</ActionIcon>
						<ActionIcon
							onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
							variant="subtle"
							color={computedColorScheme === 'light' ? 'dark' : 'orange'}
							aria-label="toggle-color"
						>
							{computedColorScheme === 'light' ? <IconMoonStars stroke={1} /> : <IconSun stroke={1} />}
						</ActionIcon>
					</Group>
				</Container>
				<Space h="xl" />
			</header>
			<Container>{children}</Container>
			<div className={style.footer}>
				<Space h="xl" />
				<Container my="md" className={style.innerFooter}>
					<Text c="dimmed" size="sm">
						© {new Date().getFullYear()} <a href="mailto:jdoconnell@pm.me">James O&apos;Connell</a>. All rights
						reserved.
					</Text>
					<Group gap={0} justify="flex-end" wrap="nowrap">
						<ActionIcon
							component="a"
							href="https://github.com/oconnellj2/oconnellj2.github.io"
							rel="noopener noreferrer nofollow"
							target="_blank"
							color="gray"
							variant="subtle"
						>
							<IconCode style={{width: rem(18), height: rem(18)}} stroke={1} />
						</ActionIcon>
					</Group>
				</Container>
			</div>
		</>
	);
};

PageTemplate.propTypes = {
	children: PropTypes.node
};

export default PageTemplate;
