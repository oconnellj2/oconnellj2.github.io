import React from 'react';

import {LineChart} from '@mantine/charts';
import {Title} from '@mantine/core';
import PropTypes from 'prop-types';

const TelemetryChart = ({telemetryData}) => (
	<>
		<Title tt="uppercase" order={4}>
			Altitude
		</Title>
		<LineChart
			h={400}
			data={telemetryData}
			dataKey="time"
			series={[{name: 'altitude', color: '#2997ff'}]}
			unit="km"
			curveType="monotone"
			tickLine="none"
			withDots={false}
			lineChartProps={{syncId: 'datum'}}
		/>
		<Title tt="uppercase" order={4}>Speed</Title>
		<LineChart
			h={400}
			data={telemetryData}
			dataKey="time"
			series={[{name: 'speed', color: '#2997ff'}]}
			curveType="monotone"
			tickLine="none"
			withDots={false}
			lineChartProps={{syncId: 'datum'}}
		/>
	</>
);

TelemetryChart.propTypes = {
	telemetryData: PropTypes.arrayOf(
		PropTypes.shape({
			time: PropTypes.string.isRequired,
			altitude: PropTypes.number.isRequired,
			speed: PropTypes.number.isRequired
		})
	).isRequired
};

export default TelemetryChart;
