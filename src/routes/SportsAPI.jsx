import React, {useState} from 'react';

import {Center, Space, Tabs, Text, Title} from '@mantine/core';
import {IconBallBaseball, IconBallBasketball} from '@tabler/icons-react';
import axios from 'axios';

import BoxScore from '../components/BoxScore';

const SportsAPI = () => {
	const [data, setData] = useState();
	const [activeTab, setActiveTab] = useState();

	const makeAPICall = match => {
		axios
			.get(`http://localhost:4000/box-score/${match}`)
			.then(res => setData(res.data))
			.catch(e => console.error('Error fetching data:', e));
	};

	const onChange = sport => {
		setActiveTab(sport);
		if (sport === 'mlb') makeAPICall(`${sport}/eed38457-db28-4658-ae4f-4d4d38e9e212`);
		else if (sport === 'nba') makeAPICall(`${sport}/6c974274-4bfc-4af8-a9c4-8b926637ba74`);
	};

	return (
		<>
			<Title order={2} tt="uppercase">
				The Box Score
			</Title>
			<Text fs="italic">
				Inspiration:{' '}
				<a
					href="https://github.com/BarstoolSports/fullstack-challenge"
					rel="noopener noreferrer nofollow"
					target="_blank"
				>
					BarstoolSports fullstack-challenge
				</a>
			</Text>
			<Space h="md" />
			<Tabs value={activeTab} onChange={onChange}>
				<Tabs.List grow>
					<Tabs.Tab value="mlb" leftSection={<IconBallBaseball stroke={1} />}>
						MLB
					</Tabs.Tab>
					<Tabs.Tab value="nba" leftSection={<IconBallBasketball stroke={1} />}>
						NBA
					</Tabs.Tab>
				</Tabs.List>
				{data && <BoxScore data={data} />}
			</Tabs>
			{!data && (
				<>
					<Space h="xl" />
					<Center>
						<Title order={2} tt="uppercase">
							Select a league
						</Title>
					</Center>
				</>
			)}
			<Space h="xl" />
		</>
	);
};

export default SportsAPI;
