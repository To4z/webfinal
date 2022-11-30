import { useEffect, useState } from "react";
import faker from "faker";
const Suggestions = () => {
    const [suggestions, setSuggestions] = useState<String[]>([]);
    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
        setSuggestions(suggestions);
    }, []);

    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">
                    Gợi ý cho bạn
                </h3>
                <button className="text-gray-600 font-semibold">
                    Xem tất cả
                </button>
            </div>

            {suggestions.map((profile) => (
                <div
                    key={profile.id}
                    className="flex items-center justify-between mt-3"
                >
                    <img
                        className="h-10 w-10 rounded-full border p-[2px]"
                        src="https://i.pinimg.com/564x/37/2c/a4/372ca49915023d63f013f27f2096585a.jpg"
                        alt=""
                    />
                    <div className="flex-1 ml-4">
                        <h2 className="font-semibold text-sm">
                            {profile.username}
                        </h2>
                        <h3 className="text-xs text-gray-400">
                            Làm việc tại {profile.company.name}
                        </h3>
                    </div>
                    <button className="text-blue-400 ml-3">Theo dõi</button>
                </div>
            ))}
        </div>
    );
};

export default Suggestions;
