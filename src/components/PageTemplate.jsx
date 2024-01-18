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
	useComputedColorScheme
} from '@mantine/core';
import {IconCode, IconSun, IconMoon} from '@tabler/icons-react';
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
						<Title className={style.textHeader} order={1}>
							hello world
						</Title>
					</Typist>
					<ActionIcon
						onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
						variant="subtle"
						color="gray"
						aria-label="toggle-color"
					>
						{computedColorScheme === 'light' ? <IconMoon /> : <IconSun />}
					</ActionIcon>
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
