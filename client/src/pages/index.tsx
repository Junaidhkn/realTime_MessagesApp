import type { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';

const Homepage: NextPage = () => {
	const { data, status } = useSession();
	console.log('data', data);
	console.log('status', status);
	return (
		<>
			<h1>Login</h1>
			<button onClick={() => signIn('google')}>SignIn</button>
		</>
	);
};

export default Homepage;
