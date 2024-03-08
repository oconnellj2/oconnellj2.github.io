import React, {useEffect, useState} from 'react';

import {Space, Text, Title} from '@mantine/core';
import axios from 'axios';

const SportsAPI = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:4000/box-score/mlb/eed38457-db28-4658-ae4f-4d4d38e9e212')
			.then(response => setData(response.data))
			.catch(error => console.error('Error fetching data:', error));
	}, []);
	console.log(data);
	return (
		<>
			<Title order={2} tt="uppercase">
				Sports!
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
		</>
	);
};

export default SportsAPI;
