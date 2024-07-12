import React, { useState } from 'react';

import {
	Button,
	Checkbox,
	Code,
	CopyButton,
	Group,
	List,
	Slider,
	Stack,
	Text,
	Title,
	Tooltip,
	TypographyStylesProvider
} from '@mantine/core';
import { IconCopy } from '@tabler/icons-react';

const PassGen = () => {
	const [value, setValue] = useState(16);
	const [caps, setCaps] = useState(true);
	const [nums, setNums] = useState(true);
	const [symb, setSymb] = useState(true);

	const shuffleString = str => {
		let charArray = str.split('');
		for (let i = charArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[charArray[i], charArray[j]] = [charArray[j], charArray[i]];
		}
		return charArray.join('');
	};

	const generatePass = len => {
		const lowers = 'abcdefghijklmnopqrstuvwxyz';
		const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const numbers = '0123456789';
		const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

		let charPool = lowers;
		if (caps) charPool += uppers;
		if (nums) charPool += numbers;
		if (symb) charPool += symbols;

		// Ensure at least one character from each type is included.
		let password = lowers.charAt(Math.floor(Math.random() * lowers.length));
		if (caps) password += uppers.charAt(Math.floor(Math.random() * uppers.length));
		if (nums) password += numbers.charAt(Math.floor(Math.random() * numbers.length));
		if (symb) password += symbols.charAt(Math.floor(Math.random() * symbols.length));
		// Decrement length based on the characters added.
		len -= (caps + nums + symb);

		// Build the rest of the password.
		for (let i = 0; i < len; i++) {
			password += charPool.charAt(Math.floor(Math.random() * charPool.length));
		}

		return shuffleString(password);
	};
	const [pass, setPass] = useState(generatePass(value));

	const handleSliderChange = newValue => {
		setValue(newValue);
		setPass(generatePass(newValue - 1));
	};

	const handleCapsCheck = checked => {
		setCaps(checked);
		setPass(generatePass(value - 1));
	};

	const getColor = (char) => {
		const charCode = char.charCodeAt(0);
		if (charCode >= 97 && charCode <= 122) {
			// Lowercase.
			return '';
		} else if (charCode >= 65 && charCode <= 90) {
			// Uppercase.
			return 'teal';
		} else if (charCode >= 48 && charCode <= 57) {
			// Numbers.
			return 'yellow';
		} else {
			// Special characters.
			return 'red';
		}
	};

	return (
		<>
			<Title order={2} tt='uppercase'>
				Password Generator
			</Title>
			<Text>Generate strong, unique passwords</Text>
			<Stack h={300} align='stretch' justify='center' gap='lg'>
				<CopyButton value={pass} timeout={2000}>
					{({ copied, copy }) => (
						<Tooltip label={copied ? 'Copied!' : 'Copy'} withArrow position="top">
							<Button
								variant='outline'
								fullWidth
								size='xl'
								onClick={copy}
								leftSection={<span />}
								rightSection={<IconCopy />}
								justify='space-between'
							>
								<Code style={{ fontSize: '18px', backgroundColor: 'transparent' }}>
									{pass.split('').map((c, i) => (
										<Text component='span' key={i} c={getColor(c)}>
											{c}
										</Text>
									))}
								</Code>
							</Button>
						</Tooltip>
					)}
				</CopyButton>
				<Text ta="center">{value} characters</Text>
				<Slider
					label={null}
					value={value}
					onChange={e => handleSliderChange(e)}
					min={8}
					max={32}
				/>
				<Group justify='center'>
					<Checkbox c='teal' fw='bold' onChange={e => handleCapsCheck(e.currentTarget.checked)} label="Capital letters ABC" />
					<Checkbox c='yellow' fw='bold' onChange={e => setNums(e.currentTarget.checked)} label="Numbers 123" />
					<Checkbox c='red' fw='bold' onChange={e => setSymb(e.currentTarget.checked)} label="Symbols !&*" />
				</Group>
			</Stack>
			<TypographyStylesProvider>
				<Title order={2} tt='uppercase'>Why use this password generator?</Title>
				<Text>Attackers use brute force attacks to expose weak passwords quickly. By measuring and prioritizing the entropy of your passwords, you can help prevent this data from falling into the wrong hands.</Text>
				<Text>Several factors affect a password&apos;s entropy and, in turn, its strength. You&apos;ll need to consider your password&apos;s:</Text>
				<List>
					<List.Item>Length (in characters)</List.Item>
					<List.Item>Use of uppercase and lowercase letters</List.Item>
					<List.Item>Use of numeric characters</List.Item>
					<List.Item>Use of special symbols</List.Item>
				</List>
				<Text>Of all the elements listed here, password length is the most important. A long enough passphrase is sufficient to defeat any brute force attack. However, you&apos;ll still improve its entropy using random uppercase letters, special symbols, and numerals.</Text>
			</TypographyStylesProvider>
		</>
	);
};

export default PassGen;
