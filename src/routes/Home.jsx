import React from 'react';

import {Space, Title} from '@mantine/core';

import CodeBox from '../components/CodeBox';

const Home = () => (
	<>
		<Title order={2} tt="uppercase">
			Do Not Just Say Hello
		</Title>
		<Space h='md'/>
		<CodeBox block>
			2023-07-19 12:32:12 you: Hi
			<br />
			2023-07-19 12:32:15 co-worker: Hello.
			<br />
			## CO-WORKER WAITS WHILE YOU PHRASE YOUR QUESTION
			<br />
			2023-07-19 12:34:01 you: I&apos;m working on [something] and I&apos;m trying to do [etc...]
			<br />
			2023-07-19 12:35:21 co-worker: Oh, that&apos;s [answer...]
			<br />
		</CodeBox>
		<p>
			It&apos;s as if you called someone on the phone and said &quot;Hi!&quot; and then put them on hold!
			<br />
			Please do this instead:
		</p>
		<CodeBox block>
			2023-07-19 12:32:12 you: Hi -- Can you help with [something]
			<br />
			2023-07-19 12:33:32 co-worker: [answers question]
		</CodeBox>
		<p>
			Note that you get help minutes sooner, and you don&apos;t make them wait. Instead, the co-worker can start thinking
			about your question right away!
			<br />
			You&apos;re trying to be polite by not jumping right into the request, like you would do in person or on the phone. But
			Chat is neither of those things. Typing is much slower than talking. Instead of being polite, you are just making
			the other person wait for you to phrase your question, which is lost productivity.
			<br />
			The same goes for &quot;Hello -- Are you there?&quot;, &quot;Hi Bob -- quick question.&quot;, and &quot;Do you have a sec ?&quot;.
			Just ask the question!
			<br />
			If you feel it&apos;s brusque to simply say &quot;Hi&quot; and ask the question, you can do something like this:
		</p>
		<CodeBox block>
			2023-07-19 12:32:12 you: If you&apos;re not busy could ask a question.
			<br />
			I&apos;m working on [something] and I&apos;m trying to do [etc...]
		</CodeBox>
		<p>
			Additionally, asking your question before getting a reply allows asynchronous communication. If the other party is
			away, and you leave before they come back, they can still answer your question, instead of just staring at a
			&quot;Hello&quot; and wondering what they missed.
		</p>
	</>
);

export default Home;
