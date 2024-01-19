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
import {
	IconCode,
	IconSun,
	IconBrandLinkedin,
	IconBrandGithub,
	IconFileText,
	IconMoonStars,
	IconSatellite
} from '@tabler/icons-react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Typist from 'react-typist-component';

import style from '../css/PageTemplate.module.css';

const PageTemplate = ({children}) => {
	const languages = [
		'Welcome',
		'Bienvenu',
		'स्वागतम्',
		'환영합니다',
		'ようこそ',
		'Ласкаво просимо',
		'Powitać',
		'Willkómmen',
		'ברוך הבא'
	];
	const [count, setCount] = useState(1);
	const [index, setIndex] = useState(0);
	const [greeting, setGreeting] = useState(languages[0]);

	useEffect(() => {
		setCount(1);
		const nextIndex = (index + 1) % languages.length;
		setGreeting(languages[nextIndex]);
		setIndex(nextIndex);
	}, [count]);

	const {setColorScheme} = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme('dark', {getInitialValueInEffect: true});

	return (
		<>
			<header>
				<Container my="xl" className={style.header}>
					<Link className={style.page} to="/">
						<Title tt="uppercase">_ </Title>
						{count && (
							<Typist style={{width: '300px'}} avgTypingDelay={50} onTypingDone={() => setCount(0)}>
								<Title tt="uppercase">{greeting}</Title>
								<Typist.Delay ms={5000} />
								<Typist.Backspace count={greeting.length} />
							</Typist>
						)}
					</Link>
					<Group gap={2} wrap="nowrap">
						<Link className={style.page} to="arrakis">
							<Text style={{marginRight: 1}} href="https://github.com/oconnellj2/oconnellj2.github.io">
								ARRAKIS
							</Text>
							<IconSatellite stroke={1} />
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
