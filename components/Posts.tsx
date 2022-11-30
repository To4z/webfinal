import Post from "./Post";

const Posts = () => {
    const postData = [
        {
            id: "1",
            userName: "To4z",
            useImg: "https://i.pinimg.com/564x/c5/50/0b/c5500b5a82e25ab3c31acd5f5e9cad77.jpg",
            img: "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            cap: " This is my post todays!",
        },
        {
            id: "2",
            userName: "To4z2",
            useImg: "https://i.pinimg.com/564x/78/04/2c/78042c3790275c92de541a98661fb807.jpg",
            img: "https://images.pexels.com/photos/754595/pexels-photo-754595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            cap: " This is my post todays!",
        },
    ];
    return (
        <div>
            {postData.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    userName={post.userName}
                    useImg={post.useImg}
                    img={post.img}
                    cap={post.cap}
                />
            ))}
        </div>
    );
};
export default Posts;
