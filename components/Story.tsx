const Story = ({ img, username }: { img: string; username: string }) => {
    return (
        console.log(img),
        (
            <div>
                <img
                    className="h-14 w-14 rounded-full p-[1.5px]
			border-violet-500 border-2 object-contain cursor-pointer transition transform duration-200 ease-out"
                    // src="https://i.pinimg.com/564x/37/2c/a4/372ca49915023d63f013f27f2096585a.jpg"
                    src={img}
                    alt=""
                />
                <p className="text-xs w-14 truncate text-center">{username}</p>
            </div>
        )
    );
};

export default Story;
