import React, {useState} from 'react';

import {CodeHighlight} from '@mantine/code-highlight';
import {
	ActionIcon,
	Center,
	Grid,
	Select,
	Space,
	Table,
	Text,
	TextInput,
	Title,
	useComputedColorScheme
} from '@mantine/core';
import {IconEye, IconEyeOff, IconLock, IconWifi} from '@tabler/icons-react';
import {QRCode} from 'react-qrcode-logo';

import CodeBox from '../components/CodeBox';

const QRWifi = () => {
	const [ssid, setSSID] = useState('');
	const [pass, setPass] = useState('');
	const [auth, setAuth] = useState('WPA');
	const [passVisible, setPassVisible] = useState(false);
	const colorScheme = useComputedColorScheme();

	return (
		<>
			<Grid align="center">
				<Grid.Col span={{base: 12, xs: 6}}>
					<Title order={2} tt="uppercase">
						QR-FI
					</Title>
					<Text>
						Create a QR code for users to easily connect to your WiFi network by inputting your networks credentials
						below.
					</Text>
					<Space h="lg" />
					<Select
						label="Network Security Protocol"
						data={['WPA', 'WEP', 'nopass']}
						searchable
						nothingFoundMessage="Nothing found..."
						comboboxProps={{transitionProps: {transition: 'pop', duration: 200}}}
						value={auth}
						onChange={setAuth}
						styles={{dropdown: {backgroundColor: colorScheme === 'dark' ? '#222' : '#fff', border: 0}}}
					/>
					<Space h="md" />
					<TextInput
						label="Network Name (SSID)"
						value={ssid}
						onChange={e => setSSID(e.target.value)}
						leftSection={<IconWifi stroke={1} />}
					/>
					<Space h="md" />
					<TextInput
						type={passVisible ? 'text' : 'password'}
						label="Network Password"
						value={pass}
						onChange={e => setPass(e.target.value)}
						leftSection={<IconLock stroke={1} />}
						rightSection={
							<ActionIcon color="gray" variant="subtle" onClick={() => setPassVisible(!passVisible)}>
								{passVisible ? <IconEyeOff stroke={1} /> : <IconEye stroke={1} />}
							</ActionIcon>
						}
					/>
					<Space h="xl" />
				</Grid.Col>
				<Grid.Col span={{base: 12, xs: 6}}>
					<Center>
						{ssid && pass && auth && (
							<QRCode
								size={250}
								bgColor={colorScheme === 'dark' ? '#000' : '#fff'}
								fgColor={colorScheme === 'dark' ? '#fff' : '#000'}
								qrStyle="dots"
								eyeRadius={10}
								value={`WIFI:S:${ssid};T:${auth};P:${pass};;`}
							/>
						)}
					</Center>
				</Grid.Col>
			</Grid>

			<Space h="xl" />
			<Title order={2} tt="uppercase">
				Wi-Fi Network config (Android, iOS 11+)
			</Title>
			<Text>
				Dont trust your browser or this website? Just pipe the following string through your favorite QR code generator
				choice:
			</Text>
			<Space h="md" />
			<CodeHighlight code={'WIFI:T:WPA;S:mynetwork;P:mypass;;'} copyLabel="Copy" copiedLabel="Copied!" />
			<Space h="md" />
			<Text>
				Order of fields does not matter. Special characters <CodeBox>\</CodeBox>, <CodeBox>;</CodeBox>,{' '}
				<CodeBox>,</CodeBox>, <CodeBox>&quot;</CodeBox> and <CodeBox>:</CodeBox> should be escaped with a backslash (
				<CodeBox>\</CodeBox>) as in MECARD encoding. For example, if an SSID was literally{' '}
				<CodeBox>&quot;foo;bar\baz&quot;</CodeBox> (with double quotes part of the SSID name itself) then it would be
				encoded like: <CodeBox>WIFI:S:\&quot;foo\;bar\\baz\&quot;;;</CodeBox>
			</Text>
			<Table stickyHeader>
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Parameter</Table.Th>
						<Table.Th>Example</Table.Th>
						<Table.Th>Description</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					<Table.Tr key="T">
						<Table.Td>T</Table.Td>
						<Table.Td>
							<CodeBox>WPA</CodeBox>
						</Table.Td>
						<Table.Td>
							Authentication type; can be <CodeBox>WPA</CodeBox>, <CodeBox>WEP</CodeBox>, or omit/
							<CodeBox>nopass</CodeBox> for no password.
						</Table.Td>
					</Table.Tr>
					<Table.Tr key="S">
						<Table.Td>S</Table.Td>
						<Table.Td>
							<CodeBox>mynetwork</CodeBox>
						</Table.Td>
						<Table.Td>
							Network SSID. Required. Enclose in double quotes if it is an ASCII name, but could be interpreted as hex
							(i.e. <CodeBox>&quot;ABCD&quot;</CodeBox>)
						</Table.Td>
					</Table.Tr>
					<Table.Tr key="P">
						<Table.Td>P</Table.Td>
						<Table.Td>
							<CodeBox>mypass</CodeBox>
						</Table.Td>
						<Table.Td>
							Password, ignored if T is ommited/<CodeBox>nopass</CodeBox>. Enclose in double quotes if it is an ASCII
							name, but could be interpreted as hex (i.e. <CodeBox>&quot;ABCD&quot;</CodeBox>)
						</Table.Td>
					</Table.Tr>
					<Table.Tr key="H">
						<Table.Td>H</Table.Td>
						<Table.Td>
							<CodeBox>true</CodeBox>
						</Table.Td>
						<Table.Td>
							Optional. True if the network SSID is hidden. Note this was mistakenly also used to specify phase 2 method
							in releases up to 4.7.8 / Barcode Scanner 3.4.0. If not a boolean, it will be interpreted as phase 2
							method (see below) for backwards-compatibility.
						</Table.Td>
					</Table.Tr>
					<Table.Tr key="E">
						<Table.Td>E</Table.Td>
						<Table.Td>
							<CodeBox>TTLS</CodeBox>
						</Table.Td>
						<Table.Td>
							(WPA2-EAP only) EAP method, like <CodeBox>TTLS</CodeBox> or <CodeBox>PWD</CodeBox>
						</Table.Td>
					</Table.Tr>
					<Table.Tr key="A">
						<Table.Td>A</Table.Td>
						<Table.Td>
							<CodeBox>anon</CodeBox>
						</Table.Td>
						<Table.Td>(WPA2-EAP only) Anonymous identity</Table.Td>
					</Table.Tr>
					<Table.Tr key="I">
						<Table.Td>I</Table.Td>
						<Table.Td>
							<CodeBox>myidentity</CodeBox>
						</Table.Td>
						<Table.Td>(WPA2-EAP only) identity</Table.Td>
					</Table.Tr>
					<Table.Tr key="PH2">
						<Table.Td>PH2</Table.Td>
						<Table.Td>
							<CodeBox>MSCHAPV2</CodeBox>
						</Table.Td>
						<Table.Td>
							(WPA2-EAP only) Phase 2 method, like <CodeBox>MSCHAPV2</CodeBox>
						</Table.Td>
					</Table.Tr>
				</Table.Tbody>
			</Table>
		</>
	);
};

export default QRWifi;
