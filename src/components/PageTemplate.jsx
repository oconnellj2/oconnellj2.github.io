import React from 'react';

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
import Typist from 'react-typist-component';

import style from '../css/PageTemplate.module.css';

const PageTemplate = ({children}) => {
	const {setColorScheme} = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme('dark', {
		getInitialValueInEffect: true
	});
	return (
		<>
			<header className={style.header}>
				<Container my="md" className={style.innerHeader}>
					<Typist>
						<Title tt="uppercase">
							hello world
						</Title>
					</Typist>
					<Group gap={5} wrap="nowrap">
						<HoverCard closeDelay={0}>
							<HoverCard.Target>
								<ActionIcon
									component="a"
									href={require('../assets/resume.pdf')}
									rel="noopener noreferrer nofollow"
									target="_blank"
									color="gray"
									variant="subtle"
								>
									<IconFileText stroke={1.5} />
								</ActionIcon>
							</HoverCard.Target>
							<HoverCard.Dropdown>
								<Text c="dimmed" size="xs">
									résumé
								</Text>
							</HoverCard.Dropdown>
						</HoverCard>
						<ActionIcon
							component="a"
							href="https://github.com/oconnellj2"
							rel="noopener noreferrer nofollow"
							target="_blank"
							color="gray"
							variant="subtle"
						>
							<IconBrandGithub stroke={1.5} />
						</ActionIcon>
						<ActionIcon
							component="a"
							href="https://www.linkedin.com/in/oconnellj2"
							rel="noopener noreferrer nofollow"
							target="_blank"
							color="gray"
							variant="subtle"
						>
							<IconBrandLinkedin stroke={1.5} />
						</ActionIcon>
						<ActionIcon
							onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
							variant="subtle"
							color={computedColorScheme === 'light' ? 'dark' : 'orange'}
							aria-label="toggle-color"
						>
							{computedColorScheme === 'light' ? <IconMoonStars stroke={1.5} /> : <IconSun stroke={1.5} />}
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
							<IconCode style={{width: rem(18), height: rem(18)}} stroke={1.5} />
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
