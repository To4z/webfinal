import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Feed from "../components/Feed";

const Home: NextPage = () => {
    return (
        <div className="bg-pink-50 h-screen overflow-y-scroll scrollbar-hide">
            <Head>
                <title>Instagram</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* this is header */}
            <Header />
            {/* This is feed */}
            <Feed />
            {/* This is modal */}
        </div>
    );
};

export default Home;
