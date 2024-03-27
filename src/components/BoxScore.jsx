import React from 'react';

import {Tabs, Title} from '@mantine/core';
import PropTypes from 'prop-types';

const BoxScore = ({data}) => {
	const {league, away_team, home_team} = data;
	console.log(data);
	return (
		<Tabs.Panel value={league.toLowerCase()}>
			<Title order={2} tt="uppercase">
				{away_team.last_name} vs. {home_team.last_name}
			</Title>
		</Tabs.Panel>
	);
};

BoxScore.propTypes = {
	data: PropTypes.object
};

export default BoxScore;
