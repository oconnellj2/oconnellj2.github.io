import React, { useEffect, useState } from 'react';

import {
	ActionIcon,
	Container,
	Group,
	Space,
	Text,
	Title,
	rem,
	useMantineColorScheme,
	Menu,
	Button
} from '@mantine/core';
import {
	IconCode,
	IconSun,
	IconBrandLinkedin,
	IconBrandGithub,
	IconFileText,
	IconMoonStars,
	IconQrcode,
	IconChevronDown,
	IconKey,
	IconMap
} from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typist from 'react-typist-component';

import style from '../css/PageTemplate.module.css';

const PageTemplate = ({ children }) => {
	const languages = [
		'Welcome',
		'Bienvenu',
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
	const [menu, setMenu] = useState(false);
	const { colorScheme, setColorScheme } = useMantineColorScheme();
	const isDark = colorScheme === 'dark';

	useEffect(() => {
		setCount(1);
		const nextIndex = (index + 1) % languages.length;
		setGreeting(languages[nextIndex]);
		setIndex(nextIndex);
	}, [count]);

	// Protect email from scraping.
	useEffect(() => {
		let elink = document.getElementById('mlink');
		if (elink) {
			let me = 'jdo.info';
			let place = 'pm.me';
			elink.href = `mailto:${me}@${place}`;
		}
	}, []);

	return (
		<>
			<header>
				<Container my="xl" className={style.header}>
					<Link className={style.page} to="/">
						<Title tt="uppercase">_ </Title>
						{count && (
							<Typist style={{ width: '300px' }} avgTypingDelay={50} onTypingDone={() => setCount(0)}>
								<Title tt="uppercase">{greeting}</Title>
								<Typist.Delay ms={5000} />
								<Typist.Backspace count={greeting.length} />
							</Typist>
						)}
					</Link>
					<Group gap={5} wrap="nowrap">
						<Menu
							shadow="md"
							styles={{ dropdown: { backgroundColor: isDark ? '#222' : '#fff', border: 0 } }}
							onClose={() => setMenu(false)}
						>
							<Menu.Target>
								<Button
									tt="uppercase"
									rightSection={
										<IconChevronDown
											stroke={1}
											style={{ transform: `rotate(${menu ? '180deg' : '0deg'})`, transition: 'transform 0.3s ease' }}
										/>
									}
									onClick={() => setMenu(true)}
									variant="transparent"
									color="none"
								>
									<Text>projects</Text>
								</Button>
							</Menu.Target>
							<Menu.Dropdown>
								{/* <Menu.Item leftSection={<IconSatellite stroke={1} />} component={Link} to="sgoms">
									SGOMS
								</Menu.Item> */}
								<Menu.Item leftSection={<IconQrcode stroke={1} />} component={Link} to="qr-fi">
									QR-FI
								</Menu.Item>
								<Menu.Item leftSection={<IconKey stroke={1} />} component={Link} to="pass-gen">
									PASS GEN
								</Menu.Item>
								<Menu.Item leftSection={<IconMap stroke={1} />} component={Link} to="zip-viz">
									ZIP VIZ
								</Menu.Item>
							</Menu.Dropdown>
						</Menu>
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
						<ActionIcon
							component="a"
							href="https://www.linkedin.com/in/jdoconnell2"
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
							color="gray"
							variant="subtle"
						>
							<IconBrandGithub stroke={1} />
						</ActionIcon>
						<ActionIcon
							onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
							variant="subtle"
							color={isDark ? 'orange' : 'dark'}
							aria-label="toggle-color"
						>
							{isDark ? <IconSun stroke={1} /> : <IconMoonStars stroke={1} />}
						</ActionIcon>
					</Group>
				</Container>
				<Space h="xl" />
			</header>
			<main>
				<Container className={style.main}>{children}</Container>
			</main>
			<footer>
				<Space h="xl" />
				<Container my="md" className={style.innerFooter}>
					<Text c="dimmed" size="sm">
						© {new Date().getFullYear()} <a id="mlink" href="#">James O&apos;Connell</a>. All rights
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
							<IconCode style={{ width: rem(18), height: rem(18) }} stroke={1} />
						</ActionIcon>
					</Group>
				</Container>
			</footer>
		</>
	);
};

PageTemplate.propTypes = {
	children: PropTypes.node
};

export default PageTemplate;
