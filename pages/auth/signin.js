import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

function SignIn({ providers }) {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <img className="w-80" src="https://links.papareact.com/ocw" />
                <p className="font-xs italic">CHÀO MỪNG BẠN NHÉ</p>
                <div className="mt-40">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button
                                className="p-3 bg-blue-500 rounded-lg text-white -mt-56 px-14 text-center"
                                onClick={() =>
                                    signIn(provider.id, { callbackUrl: "/" })
                                }
                            >
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}

export default SignIn;
