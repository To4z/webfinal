import faker from "faker";
import { Session } from "inspector";
import { useEffect, useState } from "react";
import Story from "./Story";
import { signIn, signOut, useSession } from "next-auth/react";

const Stories = () => {
    const { data: session } = useSession();

    const [suggestions, setSuggestions] = useState<String[]>([]);
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
        setSuggestions(suggestions);
    }, []);
    return (
        <div
            className="flex space-x-2 p-6 mt-8
        bg-white border-gray-20 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black"
        >
            {session && (
                <Story
                    img={session?.user?.image}
                    username={session?.user?.username}
                />
            )}
        {suggestions.map((profile) => (
                <Story
                    key={profile.id }
                    // img={img}
                    img="https://i.pravatar.cc/300"
                    username={profile.username}
                />
            ))}
        </div>
    );
};
export default Stories;


