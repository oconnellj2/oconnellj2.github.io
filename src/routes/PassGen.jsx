import React, {useEffect, useState} from 'react';

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
import {IconCopy} from '@tabler/icons-react';
import Latex from 'react-latex-next';

import CodeBox from '../components/CodeBox';

const PassGen = () => {
	const [value, setValue] = useState(16);
	const [caps, setCaps] = useState(true);
	const [nums, setNums] = useState(true);
	const [symb, setSymb] = useState(true);
	const [pass, setPass] = useState('');
	const entropyBits = value * Math.log2(26 + caps * 26 + nums * 10 + symb * 26);

	const shuffleString = str => {
		const charArray = [...str];
		for (let i = charArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[charArray[i], charArray[j]] = [charArray[j], charArray[i]];
		}
		return charArray.join('');
	};
	const generatePass = (len, caps, nums, symb) => {
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

		// Adjust remaining length.
		len -= 1 + (caps ? 1 : 0) + (nums ? 1 : 0) + (symb ? 1 : 0);

		// Build the rest of the password.
		for (let i = 0; i < len; i++) {
			password += charPool.charAt(Math.floor(Math.random() * charPool.length));
		}

		return shuffleString(password);
	};
	const getColor = char => {
		const charCode = char.charCodeAt(0);
		if (charCode >= 97 && charCode <= 122) return '';
		if (charCode >= 65 && charCode <= 90) return 'teal';
		if (charCode >= 48 && charCode <= 57) return 'yellow';
		return 'red';
	};

	const getEntropyRating = () => {
		if (entropyBits >= 80) return ['teal', 'strong'];
		else if (entropyBits >= 60 && entropyBits <= 80) return ['yellow', 'average'];
		else if (entropyBits >= 40 && entropyBits <= 60) return ['orange', 'weak'];
		else return ['red', 'terrible'];
	};

	useEffect(() => {
		setPass(generatePass(value, caps, nums, symb));
	}, [value, caps, nums, symb]);

	return (
		<>
			<Title order={2} tt="uppercase">
				Password Generator
			</Title>
			<Text>Generate strong, unique passwords.</Text>
			<Stack h={300} align="stretch" justify="center" gap="lg">
				<CopyButton value={pass} timeout={2000}>
					{({copied, copy}) => (
						<Tooltip label={copied ? 'Copied!' : 'Copy'} withArrow position="top">
							<Button
								variant="light"
								fullWidth
								size="xl"
								onClick={copy}
								leftSection={<span />}
								rightSection={<IconCopy />}
								justify="space-between"
							>
								<Code style={{fontSize: '18px', backgroundColor: 'transparent'}}>
									{pass.split('').map((c, i) => (
										<Text component="span" key={i} c={getColor(c)}>
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
					onChange={setValue}
					min={8}
					max={32}
					styles={{track: {backgroundColor: '#333'}}}
				/>
				<Group justify="center">
					<Checkbox
						c="teal"
						defaultChecked
						fw="bold"
						onChange={e => setCaps(e.currentTarget.checked)}
						label="Capital letters ABC"
					/>
					<Checkbox
						c="yellow"
						defaultChecked
						fw="bold"
						onChange={e => setNums(e.currentTarget.checked)}
						label="Numbers 123"
					/>
					<Checkbox
						c="red"
						defaultChecked
						fw="bold"
						onChange={e => setSymb(e.currentTarget.checked)}
						label="Symbols !&*"
					/>
				</Group>
			</Stack>
			<TypographyStylesProvider>
				<Title order={3} tt="uppercase">
					TL;DR
				</Title>
				<Text>
					The generated password above has{' '}
					<Text component="span" c={getEntropyRating()[0]} fw={700}>
						{entropyBits.toFixed(2)}bits of entropy
					</Text>{' '}
					making it a{' '}
					<Text component="span" c={getEntropyRating()[0]} fw={700}>
						{getEntropyRating()[1]}
					</Text>{' '}
					password.
				</Text>
				<Title order={3} tt="uppercase">
					password entropy
				</Title>
				<Text>
					Password entropy(denoted as <Latex>$E$</Latex>), is a{' '}
					<a
						href="https://en.wikipedia.org/wiki/Entropy_(information_theory)"
						rel="noopener noreferrer nofollow"
						target="_blank"
					>
						concept from information theory
					</a>{' '}
					that measures the amount of uncertainty or unpredictability in a system. In the context of passwords, it
					represents the number of bits of information required to uniquely identify the password from all possible
					combinations through brute-force attacks. Entropy is mathematically defined as:
				</Text>
				<Latex>\[E = L \cdot \log_2(N)\]</Latex>
				Such that:
				<List type="ordered">
					<List.Item>
						<Latex>$L\space-$</Latex> Represents the length of the password. The longer the password, the higher its
						entropy, making it more secure. Each additional character increases the number of possible combinations
						exponentially.
					</List.Item>
					<List.Item>
						<Latex>$\log_2\space-$</Latex> Used to convert the size of the character pool into bits. It represents the
						number of bits needed to encode each character uniquely.
					</List.Item>
					<List.Item>
						<Latex>$N\space-$</Latex> Represents the total number of unique characters that can be used in the password.
						This pool can include:
						<List listStyleType="disc">
							<List.Item>
								Lowercase letters (26 characters: <CodeBox>a-z</CodeBox>)
							</List.Item>
							<List.Item>
								Uppercase letters (26 characters: <CodeBox>A-Z</CodeBox>)
							</List.Item>
							<List.Item>
								Digits (10 characters: <CodeBox>0-9</CodeBox>)
							</List.Item>
							<List.Item>
								Special characters (e.g., <CodeBox>!</CodeBox>, <CodeBox>@</CodeBox>, <CodeBox>#</CodeBox>, etc.)
							</List.Item>
						</List>
					</List.Item>
				</List>
				<Title order={3} tt="uppercase">
					Time to Crack
				</Title>
				<Text>
					The bits of entropy of a password directly translate to the time complexity(denoted as <Latex>$T$</Latex>) of
					a brute force algorithm to solve it. The higher the entropy, the more possible combinations there are to try,
					and thus the longer it takes to crack the password using a brute force attack.
				</Text>
				<Latex>{'\\[T=\\frac{2^{(E-1)}}{A}\\]'}</Latex>
				Such that:
				<List type="ordered">
					<List.Item>
						<Latex>{'$2^{(E-1)}\\space-$'}</Latex> Represents half the number of possible combinations(where{' '}
						<Latex>$E$</Latex> represents the passwords entropy), since on average a brute force attack will try half of
						the possible combinations before finding the correct password.
					</List.Item>
					<List.Item>
						<Latex>$A\space-$</Latex> Represents the rate of attack, which can vary between{' '}
						<CodeBox>10 million</CodeBox>(<Latex>$10^7$</Latex>) to <CodeBox>100 million</CodeBox>(<Latex>$10^8$</Latex>
						) for some personal computers and for dedicated GPUs/FPGA-based systems <CodeBox>100 million</CodeBox>(
						<Latex>$10^8$</Latex>) to <CodeBox>1 billion</CodeBox>(<Latex>$10^9$</Latex>) operations.
					</List.Item>
				</List>
				<Text component="span" fw={700}>
					Example 1:
				</Text>{' '}
				Average time to crack a password with <CodeBox>52bits</CodeBox> of entropy at <CodeBox>100 million</CodeBox>{' '}
				attempts per second:
				<Text>
					<Latex>{'\\[T=\\frac{2^{51}}{10^8} \\approx 75 \\space minutes \\]'}</Latex>
				</Text>
				<Text component="span" fw={700}>
					Example 2:
				</Text>{' '}
				Average time to crack a password with <CodeBox>80bits</CodeBox> of entropy at <CodeBox>100 million</CodeBox>{' '}
				attempts per second:
				<Text>
					<Latex>{'\\[T=\\frac{2^{79}}{10^8} \\approx 191 \\space million \\space years \\]'}</Latex>
				</Text>
				Therefore, most users should aim for <CodeBox>70-80bits</CodeBox> of entropy. Which typically translates to
				passwords that are <CodeBox>12-16</CodeBox> characters long using a mix of uppercase, lowercase, numbers, and
				special characters.
				<Title order={3} tt="uppercase">
					Note
				</Title>
				<Text>
					Entropy and complexity aren&apos;t the only password strength factors. Hackers can use dictionary attacks to
					guess your credentials if you use a recognizable word or common phrase in your password.
				</Text>
				<Text>
					A dictionary attacker automates brute force guesses of every word in a dictionary that might be used within a
					password.
				</Text>
				<Text>
					Therefore, regardless of your password&apos;s entropy, you&apos;re still at risk of hacking if you use pet
					names, sports teams, or other common passwords (e.g., never use “<CodeBox>password</CodeBox>”) in your login
					details.
				</Text>
			</TypographyStylesProvider>
		</>
	);
};

export default PassGen;
