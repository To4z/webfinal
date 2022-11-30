import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import { signIn, signOut, useSession } from "next-auth/react";

const feed = () => {
    const { data: session } = useSession();

    return (
        <main
            className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${
                !session && "!grid-cols-1 !max-w-3xl"
            }`}
        >
            {/* 1) Section */}
            <section className="col-span-2">
                {/* 1.1) Story */}
                <Stories />
                {/* 1.2) Post */}
                <Posts />
            </section>
            {/* 2) Order section */}
            {session && (
                <section className="hidden xl:inline-grid md:col-span-1">
                    <div className="fixed top-20">
                        {/* 2.1) Mini profile */}
                        <MiniProfile />
                        {/* 2.2) Suggestions */}
                        <Suggestions />
                    </div>
                </section>
            )}
        </main>
    );
};
export default feed;
