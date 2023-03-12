import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

const Homepage: NextPage = () => {
	const { data, status } = useSession();
	console.log('data', data);
	console.log('status', status);
	return (
		<>
			{data?.user ? (
				<>
					<h1>{data?.user.name}</h1>
					<button onClick={() => signOut()}>SignOut</button>
				</>
			) : (
				<>
					<h1>Login</h1>
					<button onClick={() => signIn('google')}>SignIn</button>
				</>
			)}
		</>
	);
};

export default Homepage;
