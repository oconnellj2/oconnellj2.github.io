/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import {Code, Title} from '@mantine/core';

const Home = () => (
	<>
		<Title order={2} tt="uppercase">
			Do Not Just Say Hello
		</Title>
		<Code block>
			2023-07-19 12:32:12 you: Hi
			<br />
			2023-07-19 12:32:15 co-worker: Hello.
			<br />
			## CO-WORKER WAITS WHILE YOU PHRASE YOUR QUESTION
			<br />
			2023-07-19 12:34:01 you: I'm working on [something] and I'm trying to do [etc...]
			<br />
			2023-07-19 12:35:21 co-worker: Oh, that's [answer...]
			<br />
		</Code>
		<p>
			It's as if you called someone on the phone and said "Hi!" and then put them on hold!
			<br />
			Please do this instead:
		</p>
		<Code block>
			2023-07-19 12:32:12 you: Hi -- Can you help with [something]
			<br />
			2023-07-19 12:33:32 co-worker: [answers question]
		</Code>
		<p>
			Note that you get help minutes sooner, and you don't make them wait. Instead, the co-worker can start thinking
			about your question right away!
			<br />
			You're trying to be polite by not jumping right into the request, like you would do in person or on the phone. But
			Chat is neither of those things. Typing is much slower than talking. Instead of being polite, you are just making
			the other person wait for you to phrase your question, which is lost productivity.
			<br />
			The same goes for "Hello -- Are you there?", "Hi Bob -- quick question.", and "Do you have a sec ?".
			Just ask the question!
			<br />
			If you feel it's brusque to simply say "Hi" and ask the question, you can do something like this:
		</p>
		<Code block>
			2023-07-19 12:32:12 you: If you're not busy could ask a question.
			<br />
			I'm working on [something] and I'm trying to do [etc...]
		</Code>
		<p>
			Additionally, asking your question before getting a reply allows asynchronous communication. If the other party is
			away, and you leave before they come back, they can still answer your question, instead of just staring at a
			"Hello" and wondering what they missed.
		</p>
	</>
);

export default Home;
