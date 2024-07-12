import React from 'react';

import {List, ListItem, Space, Text, Title} from '@mantine/core';

const SGOMS = () => (
	<>
		<Title order={2} tt="uppercase">
			Satellite Ground Operations Management System (SGOMS)
		</Title>
		<Space h="md" />
		<Text>
			The Satellite Ground Operations Management System (SGOMS) is designed to efficiently manage satellite operations
			from the ground. Its main objectives are:
		</Text>
		<List>
			<ListItem>Command Management: Securely transmit and manage commands sent to satellites.</ListItem>
			<ListItem>Telemetry Processing: Real-time processing and analysis of telemetry data from satellites.</ListItem>
			<ListItem>Notification Services: Provide real-time notifications about satellite status and events.</ListItem>
			<ListItem>
				Scalability and Reliability: Ensure the system can scale and remain resilient using micro-services.
			</ListItem>
		</List>
		<Text>
			SGOMS aims to provide a reliable and scalable platform for effective satellite ground operations management.
		</Text>
	</>
);

export default SGOMS;
