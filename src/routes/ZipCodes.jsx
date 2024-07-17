import React, {useEffect, useRef, useState, useMemo} from 'react';

import {Container, Space, Title, NumberInput, Text, useComputedColorScheme, Popover} from '@mantine/core';
import {geoAlbersUsa, select} from 'd3';

import zipcodes from '../assets/zipcodes.json';

const ZipCodes = () => {
	const svgRef = useRef();
	const [value, setValue] = useState('');
	const inputRef = useRef(null);
	const color = useComputedColorScheme() === 'dark' ? '#fff' : '#000';
	const bgColor = useComputedColorScheme() === 'dark' ? '#222' : '#fff';

	const filteredZips = useMemo(() => {
		const searchTerm = String(value).trim();
		return searchTerm === '' ? [] : zipcodes.filter(zip => zip.zipcode.startsWith(searchTerm));
	}, [value]);

	const renderVisualization = () => {
		const container = svgRef.current.parentNode;
		const width = container.clientWidth;
		const height = 600;
		const svg = select(svgRef.current).attr('width', width).attr('height', height).style('background', 'transparent');
		const projection = geoAlbersUsa()
			.scale(width * 1.3)
			.translate([width / 2, height / 2]);
		zipcodes.forEach(d => {
			const coords = projection([d.longitude, d.latitude]);
			d.x = coords[0];
			d.y = coords[1];
		});
		const circles = svg.selectAll('circle').data(zipcodes, d => d.zipcode);
		circles
			.enter()
			.append('circle')
			.attr('r', 0.5)
			.merge(circles)
			.transition()
			.duration(500)
			.attr('cx', d => d.x)
			.attr('cy', d => d.y)
			.style('fill', d => (filteredZips.includes(d) ? '#2997ff' : color));
		circles.exit().transition().duration(500).style('fill', color).remove();
	};

	useEffect(() => {
		const resizeHandler = () => renderVisualization();
		renderVisualization();
		window.addEventListener('resize', resizeHandler);
		return () => window.removeEventListener('resize', resizeHandler);
	}, [filteredZips, color]);

	return (
		<Container>
			<Title order={2} tt="uppercase">
				Zip Viz
			</Title>
			<Text>
				Data sourced from{' '}
				<a
					href="https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html"
					rel="noopener noreferrer nofollow"
					target="_blank"
				>
					census.gov
				</a>
				; refined with{' '}
				<a href="https://api.zippopotam.us/" rel="noopener noreferrer nofollow" target="_blank">
					zippopotam
				</a>
				. Projected using{' '}
				<a href="https://d3js.org/d3-geo/conic#geoAlbersUsa" rel="noopener noreferrer nofollow" target="_blank">
					d3.geoAlbersUsa
				</a>
				.
			</Text>
			<Space h="md" />
			<NumberInput
				ref={inputRef}
				placeholder="enter a zip"
				clampBehavior="strict"
				max={99929}
				value={value}
				onChange={setValue}
				hideControls
				allowNegative={false}
			/>
			<Space h="md" />
			<svg ref={svgRef}>
				{filteredZips.length === 1 && (
					<Popover position="top" opened withArrow styles={{dropdown: {backgroundColor: bgColor}}}>
						<Popover.Target>
							<rect
								x={filteredZips[0].x - 2.5}
								y={filteredZips[0].y - 2.5}
								width={5}
								height={5}
								style={{fill: '#2997ff'}}
							/>
						</Popover.Target>
						<Popover.Dropdown>
							<Text size="xs">{filteredZips[0].location}</Text>
						</Popover.Dropdown>
					</Popover>
				)}
			</svg>
		</Container>
	);
};

export default ZipCodes;
