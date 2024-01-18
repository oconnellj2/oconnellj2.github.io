/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import PageTemplate from './components/PageTemplate';

const App = () => (
	<PageTemplate>
		<h2>Please Don't Say Just Hello In Chat</h2>
		<pre>
			<code>
				2010-07-19 12:32:12 you: Hi
				<br />
				2010-07-19 12:32:15 co-worker: Hello.
				<br />
				## CO-WORKER WAITS WHILE YOU PHRASE YOUR QUESTION
				<br />
				2010-07-19 12:34:01 you: I'm working on [something] and I'm trying to do [etc...]
				<br />
				2010-07-19 12:35:21 co-worker: Oh, that's [answer...]
				<br />
			</code>
		</pre>
		<p>
			It's as if you called someone on the phone and said "Hi!" and then put them on hold!
			<br />
			Please do this instead:
		</p>
		<pre>
			<code>
				2010-07-19 12:32:12 you: Hi -- I'm working on [something] and I'm trying to do [etc...]
				<br />
				2010-07-19 12:33:32 co-worker: [answers question]
			</code>
		</pre>
		<p>
			Note that you get help minutes sooner, and you don't make them wait. Instead, the co-worker can start
			thinking about your question right away!
			<br />
			You're trying to be polite by not jumping right into the request, like you would do in person or on the
			phone. But Chat is neither of those things. Typing is much slower than talking. Instead of being polite, you
			are just making the other person wait for you to phrase your question, which is lost productivity.
			<br />
			The same goes for "Hello -- Are you there?", "Hi Bob -- quick question.", "Do you have a sec ?", "yt?" and
			"ping". Just ask the question!
			<br />
			If you feel it's brusque to simply say "Hi" and ask the question, you can do something like this:
		</p>
		<pre>
			<code>
				2010-07-19 12:32:12 you: Hi -- if you're not busy I was wondering if I could ask a question.
				<br />
				I'm working on [something] and I'm trying to do [etc...]
			</code>
		</pre>
		<p>
			Additionally, asking your question before getting a reply allows asynchronous communication. If the other
			party is away, and you leave before they come back, they can still answer your question, instead of just
			staring at a "Hello" and wondering what they missed.
			<br />
			Short link to this page: http://nohello.com/. (If you see that as someone's status, please be prepared to be
			ignored if you only say "Hello!".)
		</p>
	</PageTemplate>
);

export default App;
