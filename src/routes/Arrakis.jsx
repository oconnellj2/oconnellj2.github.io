import React, {useEffect, useState} from 'react';

import {NativeSelect, Space, Text, Title} from '@mantine/core';
import axios from 'axios';

import TelemetryChart from '../components/TelemetryChart';

const Arrakis = () => {
	const [data, setData] = useState([]);
	const [mission, setMission] = useState('starlink/starlink-6');
	useEffect(() => {
		axios
			.get(`https://r4ygm.github.io/SpaceXTelemetry-Api/${mission}/api/telemetry.json`)
			.then(response => setData(response.data))
			.catch(error => console.error('Error fetching data:', error));
	}, [mission]);

	return (
		<>
			<Title order={2} tt="uppercase">
				Arrakis - Spacex Mission Telemetry Client
			</Title>
			<Text fs="italic">
				See: {' '}
				<a href="https://r4ygm.github.io/SpaceXTelemetry-Api/" rel="noopener noreferrer nofollow" target="_blank">
					SpaceXTelemetry-Api
				</a>
			</Text>
			<Space h="md" />
			<NativeSelect
				label="MISSION"
				size='lg'
				style={{paddingBottom: 50}}
				data={[
					{
						group: 'Starlink',
						items: [
							{label: 'Starlink-5', value: 'starlink/starlink-5'},
							{label: 'Starlink-6', value: 'starlink/starlink-6'},
							{label: 'Starlink-7', value: 'starlink/starlink-7'},
							{label: 'Starlink-8', value: 'starlink/starlink-8'},
						]
					},
					{
						group: 'Crew Dragon',
						items: [
							{label: 'Demo-2', value: 'crew-dragon/dm-2'}
						]
					},
					{
						group: 'GPS',
						items: [
							{label: 'gps-iii-sv03', value: 'gps/gps-iii-sv03'}
						]
					},
					{
						group: 'ANASIS',
						items: [
							{label: 'anasis-ii', value: 'anasis/anasis-ii'}
						]
					},
				]}
				onChange={event => setMission(event.currentTarget.value)}
			/>
			<Space h="md" />
			{data && <TelemetryChart telemetryData={data} />}
		</>
	);
};

export default Arrakis;
